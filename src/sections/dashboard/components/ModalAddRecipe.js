import React from "react";
import { UseAddRecipe } from "../hooks/UseAddRecipe";
import FileUpload from "@/components/FileUpload"

const ModalAddRecipe = ({ recipe, refetch }) => {
  const { 
    errors, 
    form, 
    handleOnChange, 
    handleSubmit,
    file,
    error,
    handleFileChange
  } = UseAddRecipe({ data: recipe, refetch });

  const handleCancel = () => {
    const modal = document.getElementById(`modal-dashboard-add-recipe`);
    if (modal) {
      modal.close(); 
    }
  };

  return (
    <div className="flex">
      <div className="flex-grow pt-24 pl-80">
        <dialog id={`modal-dashboard-add-recipe`} className="modal-box custom-modal-size">
          <p className="text-center text-xl text-green-700 font-bold">Write Your Recipe</p>

          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name..."
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700"
              value={form?.name}
              onChange={handleOnChange}
              errors={errors.name}
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
                currentValue={recipe?.image}
                name="image"
                type="file"
                className="border border-gray-400 rounded-l pl-8 w-full py-2 px-3 text-gray-700 font-bold"
                value={file}
                onChange={handleFileChange}
                error={error}
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
              errors={errors.category}
            >
              <option value="">Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>
          </div>

          <div className="mb-1">
            <label className="block text-green-700 text-sm font-bold mb-2">Create At</label>
            <input
              type="text"
              name="created_at"
              placeholder="Create At"
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700"
              value={form?.created_at}
              onChange={handleOnChange}
              errors={errors.created_at}
            />
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

export default ModalAddRecipe;
