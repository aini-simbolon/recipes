import React, { useState } from "react";
import Image from "next/image";
import { MdEdit, MdDelete } from "react-icons/md";
import { UseGetRecipe } from "../hooks/UseGetRecipe";
import SideBar from "@/components/SideBar";
import ModalAddRecipe from "../components/ModalAddRecipe";
import ModalEditRecipe from "../components/ModalEditRecipe";
import ModalConfirmDeleteRecipe from "../components/ModalConfirmDeleteRecipe";
import Dropdown from "@/components/Dropdown";
import ModalDetailRecipe from "../components/ModalDetailRecipe"

const Recipes = () => {
  const { data, refetch } = UseGetRecipe({ isLanding: false });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    const modal = document.getElementById('modal-detail-recipe');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('modal-detail-recipe');
    if (modal) {
      modal.close();
    }
    setSelectedRecipe(null);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow px-4">
        <Dropdown />
        <button
          style={{
            backgroundColor: '#38a169',
            color: '#ffffff',
            padding: '0.4rem 1rem',
            borderRadius: '0.375rem',
            position: 'absolute',
            top: '6.5rem',
            right: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => document.getElementById('modal-dashboard-add-recipe')?.showModal()}
        >
          <MdEdit style={{ marginBottom: '0.25rem' }} /> Write Recipe
        </button>

        <ModalAddRecipe refetch={refetch} />
        <ModalDetailRecipe recipe={selectedRecipe} onClose={closeModal} />
        <div style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '85px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid #6b7280',
              tableLayout: 'fixed',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid #6b7280', color: '#38a169' }}>
                <th style={{ width: '50px', borderRight: '1px solid #6b7280', paddingLeft: '1rem' }}>NO</th>
                <th style={{ width: '180px', borderRight: '1px solid #6b7280', paddingLeft: '1rem' }}>Name</th>
                <th style={{ width: '150px', borderRight: '1px solid #6b7280', paddingLeft: '2rem' }}>Image</th>
                <th style={{ width: '150px', borderRight: '1px solid #6b7280' }}>Content</th>
                <th style={{ width: '150px', borderRight: '1px solid #6b7280' }}>Category</th>
                <th style={{ width: '150px', borderRight: '1px solid #6b7280', paddingLeft: '3rem' }}>Create At</th>
                <th style={{ width: '100px', borderRight: '1px solid #6b7280' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((recipe, index) => (
                <tr key={`${recipe.id}`} style={{ borderBottom: '1px solid #6b7280' }}>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280', paddingLeft: '1rem' }}>{index + 1}</td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280' }}>{recipe.name}</td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280' }}>
                    <div style={{ height: '3rem', width: '3rem', overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        src={recipe.image}
                        alt="makanan"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover'}}
                      />
                    </div>
                  </td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280', textAlign:'center' }}>
                    <button
                      style={{
                        backgroundColor: '#fbbf24',
                        color: '#ffffff',
                        padding: '0.25rem 1rem',
                        borderRadius: '0.25rem',
                      }}
                      onClick={() => openModal(recipe)}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280' }}>{recipe.category}</td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280' }}>{recipe.created_at}</td>
                  <td style={{ padding: '0.5rem', borderRight: '1px solid #6b7280' }}>
                    <div style={{ display: 'flex' }}>
                      <button
                        style={{
                          backgroundColor: '#93c5fd',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.75rem',
                          marginRight: '4px'
                        }}
                        onClick={() => {
                          const modal = document.getElementById(`${recipe.id}-modal-dashboard-edit-recipe`);
                          console.log('Opening modal with ID:', modal?.id);
                          if (modal) {
                            modal.showModal();
                          } else {
                            console.error('Modal not found');
                          }
                        }}
                      >
                        <MdEdit />
                      </button>
                      <ModalEditRecipe recipe={recipe} refetch={refetch}/>
                      <button
                        style={{
                          backgroundColor: '#ef4444',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.75rem',
                        }}
                        onClick={() => document.getElementById(`${recipe.id}-recipe-modal-delete`)?.showModal()}
                      >
                        <MdDelete />
                      </button>
                      <ModalConfirmDeleteRecipe recipe={recipe} refetch={refetch} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
