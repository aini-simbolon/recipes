import { api } from "@/libs/api";
import React from "react";
import {z} from "zod"
import toast from "react-hot-toast";

const defaultData = {
  name: "",
  content: "",
  image: "",
  category: ""
};

export const UseAddRecipe = ({ refetch }) => {
  const [form, setForm] = React.useState(defaultData);
  const [errors, setErrors] = React.useState(defaultData);

  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState('');

  const handleFileChange = (selectedFile) => {
    if (selectedFile.type !== 'image/jpeg' && selectedFile.type !== 'image/png') {
      setError('Hanya file gambar (JPG, PNG) yang diizinkan.');
      return;
    }
    
    setFile(selectedFile);
    setError('');
  };


  const dataSchema = z.object({
    name: z.string().min(1, "Name is required"),
    content: z.string().min(1, "Content is required"),
    category: z.string().min(1, "Category is required")
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const dataValidation = () => {
    const result = dataSchema.safeParse(form);
    if (!result.success) {
      const validErrors = result.error.errors;
      validErrors.forEach((error) => {
        const name = error.path[0];
        const msg = error.message;
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: msg
        }));
      });
      return false;
    }
    return true;
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);
  
      const response = await api.post("/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log("Image upload response:", response);
      return response.data; 
    } catch (error) {
      console.log("Image upload error:", error);
      toast.error("Failed Upload image");
      throw error; 
    }
  };
  

  const handleSubmit = async () => {
    const isValid = dataValidation();
    if (!isValid) return;
  
    const toastId = toast.loading("Adding Recipe...");
    try {
      const imageUpload = file ? await handleUploadImage() : { url: "" };
      const body = { ...form, image: imageUpload.url };
  
      console.log("Request body", body);
  
      const response = await api.post("/recipes", body);
      console.log("Recipe response:", response); 
  
      refetch();
  
      const modal = document.getElementById('modal-dashboard-add-recipe');
      if (modal) modal.close();
  
      toast.success("Recipe Added Successfully!", { id: toastId });
    } catch (error) {
      console.log("Error Response:", error); 
      const msg = error?.response?.data?.message || "An error occurred";
      toast.error(msg, { id: toastId });
    }
  };
  
  

  return {
    handleSubmit,
    handleFileChange,
    handleOnChange,
    form,
    errors,
    file,
    error
  };
};
