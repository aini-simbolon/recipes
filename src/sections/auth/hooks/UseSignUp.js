import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import {api} from "@/libs/api"

const defaultData = {
  fullName: "",
    email: "",
  password: "",
};

export const UseSignUp = () => {
  const router = useRouter();
  const [form, setForm] = React.useState(defaultData);
  const [errors, setErrors] = React.useState(defaultData);

  const dataSchema = z.object({
    fullName: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(4),
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

  const handleSubmit = async () => {
    const isValid = dataValidation();
    if (!isValid) {
      return;
    }
  
    const toastId = toast.loading("Sign Up...");
  
    try {
      const response = await api.post("/auth/SignUp", form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      toast.success("Sign Up Success", {
        id: toastId
      });
      router.push("/SignIn");
    } catch (error) {
      let msg = "";
  
      if (error.response && error.response.data) {
        msg = error.response.data.message || msg;
      }
  
      toast.error(msg, {
        id: toastId
      });
    }
  };
  

  return { handleOnChange, handleSubmit, form, errors };
};
 