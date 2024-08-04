import React from "react";
import { UseEditRecipe} from "../hooks/UseEditRecipe"
import FileUpload from "@/components/FileUpload";


const ModalEditRecipe = ({recipe, refetch}) => {
    const { 
        errors, 
        form, 
        handleOnChange, 
        handleSubmit,
        file,
        error,
        handleFileChange
       } = UseEditRecipe({data : recipe, refetch});

       const handleCancel = () => {
        const modal = document.getElementById(`${recipe?.id}-modal-dashboard-edit-recipe`);
        if (modal) {
          modal.close(); 
        }
      };
      
  return (
    <div className="flex">
      <div className="">
      <dialog id={`${recipe?.id}-modal-dashboard-edit-recipe`} className="modal-box custom-modal-size">
        <p className="text-center text-xl text-green-700 font-bold">Edit Your Recipe</p> 
           
          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name..."
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700"
              value={form?.name}
              onChange={handleOnChange}
              errors= {errors.name}
            />
          </div>

          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Content</label>
            <textarea
              name="content"
              placeholder="Recipe Content..."
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 h-[100px]"
              value={form?.content}
              onChange={handleOnChange}
              errors={errors.content}
            ></textarea>
          </div>

          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Image</label>
            <div className="relative">
              <FileUpload
                type="text"
                name="image"
                className="border border-gray-400 rounded-l pl-8 w-full py-2 px-3 text-gray-700 font-bold"
                value={file}
                onChange={handleFileChange}
                error={error}
                currentValue={recipe?.image}
              />
            </div>
          </div>

          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Category</label>
            <select
              name="category"
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700"
              value={form?.category}
              onChange={handleOnChange}
              errors= {errors.category}
            >
              <option value="">Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Drink</option>
            </select>
          </div>

          <div style={{marginTop:'20px'}} className="flex items-center justify-between"> 
          <button
              type="button"
              className="bg-green-700 hover:bg-green-600 w-full text-white font-bold py-2 px-2 rounded-xl"
              onClick={handleCancel}>Cancel
            </button>

            <button
              type="button"
              className="bg-green-700 hover:bg-green-600 w-full text-white font-bold py-2 px-2 rounded-xl ml-2"
              onClick={handleSubmit} >Submit
            </button>

          </div>
        </dialog>
      </div> 
    </div>
  );
};

export default ModalEditRecipe;
