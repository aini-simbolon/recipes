import {api} from "@/libs/api";
import React from "react";
import toast from "react-hot-toast";
import {z} from "zod";
 
export const UseEditRecipe = ({ refetch, data }) => {
  const [form, setForm] = React.useState(data);
  const [errors, setErrors] = React.useState({});
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState('');

  const dataSchema = z.object ({
    name: z.string().min(1, "Name is Required"),
    content: z.string().min(1, "Content is Required"),
    category: z.string().min(1, "Category is Required")
    });
    
    
    const handleOnChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setForm({
          ...form,
          [name]: value,
        });
    
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
  };

  const dataValidation = () => {
    const result = dataSchema.safeParse(form);
  
    if (!result.success) {
      const validErrors = result.error.errors;
      validErrors.forEach((error) => {
        const name = error.path[0];
        const msg = error.message;
  
        setErrors((prev) => ({
          ...prev,
          [name]: msg,
        }));
      });
  
      return false;
    } else {
      return true;
    }
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
  
    const toastId = toast.loading("Editing Recipe...");
    try {
      const imageUpload = file ? await handleUploadImage() : { url: "" };
      const body = { ...form, image: imageUpload.url };
  
      console.log("Request body", body);
  
      const response = await api.patch(`/recipes/${data.id}`, body);
      console.log("Recipe response:", response); 
  
      refetch();
  
      const modal = document.getElementById(`${data.id}-modal-dashboard-edit-recipe`);
      if (modal) modal.close();
  
      toast.success("Edit Recipe Success!", { id: toastId });
    } catch (error) {
      console.log("Error Response:", error); 
      const msg = error?.response?.data?.message || "An error occurred";
      toast.error(msg, { id: toastId });
    }
  };


  const handleFileChange = (selectedFile) => {
    if (selectedFile.type !== 'image/jpeg' && selectedFile.type !== 'image/png') {
      setError('Hanya file gambar (JPG, PNG) yang diizinkan.');
      return;
    }

    setFile(selectedFile);
    setError('');
  };

  return { 
    handleSubmit, 
    handleOnChange, 
    form, 
    errors, 
    file,
    error,
    handleFileChange
  }
}