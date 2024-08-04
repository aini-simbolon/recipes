import { api } from "@/libs/api";
import toast from "react-hot-toast";

const ModalConfirmDeleteRecipe = ({ recipe, refetch }) => {
  const handleDeleteRecipe = async () => {
    if (!recipe || !recipe.id) {
      console.error('No recipe ID available');
      return;
    }

    const toastId = toast.loading("Deleting Recipe");

    try {
      await api.delete(`/recipes/${recipe.id}`);
      toast.success("Recipe Deleted Successfully", { id: toastId });

      refetch();

      const modalCloseButton = document.getElementById(`${recipe.id}-recipe-modal-delete-close`);
      if (modalCloseButton) modalCloseButton.click();
    } catch (error) {
      console.log('Error:', error);
      const msg = error?.response?.data?.message;
      toast.error(msg || "Failed to delete recipe", { id: toastId });
    }
  };

  return (
    <dialog id={`${recipe.id}-recipe-modal-delete`} className="modal modal-open modal-box custom-modal-size">
      <p className="text-gray-800 text-lg">
        Are you sure you want to delete{" "}
        <span className="font-bold text-red-600">{recipe.name}</span>?
      </p>
      <div className="flex justify-end gap-x-4 mt-6">
        <button
          className="btn btn-sm bg-gray-200 text-gray-800 hover:bg-gray-300 border border-gray-300 px-4 py-2 rounded"
          style={{ backgroundColor: '#f5f5f5', borderColor: '#d1d5db' }}
          onClick={() => {
            document.getElementById(`${recipe.id}-recipe-modal-delete-close`)?.click();
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-sm bg-green-700 text-white hover:bg-green-700 px-4 py-2 rounded ml-4"
          onClick={handleDeleteRecipe}
        >
          Yes
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button id={`${recipe.id}-recipe-modal-delete-close`} className="hidden">close</button>
      </form>
    </dialog>
  );
};

export default ModalConfirmDeleteRecipe;