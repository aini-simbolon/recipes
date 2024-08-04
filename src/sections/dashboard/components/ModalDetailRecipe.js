import React from 'react';

const ModalDetailRecipe = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <dialog id="modal-detail-recipe" style={{ borderRadius: '1rem', padding: '1rem' }}>
      <div>
        <h2>{recipe.name}</h2>
        <div>
          <img src={recipe.image} alt={recipe.name} style={{ width: '25%', height: 'auto', objectFit: 'cover', borderRadius: '1rem' }} />
          <div style={{ textAlign: 'left', marginTop: '1rem' }}>
            {recipe.content.split('\n').map((line, index) => (
              <p key={index} style={{ margin: '0.5rem 0' }}>{line}</p>
            ))}
          </div>
          <p className='pt-6'>Category: {recipe.category}</p>
          <p className='pt-6'>Created At: {recipe.created_at}</p>
        </div>
        <button style={{ backgroundColor: '#e53e3e', color: 'white', padding: '12px', borderRadius: '0.375rem', marginTop: '20px' }} onClick={() => document.getElementById('modal-detail-recipe')?.close()}>
          Close
        </button>
      </div>
    </dialog>
  );
};

export default ModalDetailRecipe;
