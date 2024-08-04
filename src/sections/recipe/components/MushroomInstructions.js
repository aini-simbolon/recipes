function Mushroom() {
  const steps = [
    "Saute Mushrooms: In a large pot, melt the butter over medium heat. Add the chopped onions and minced garlic, sauté until onions are translucent and garlic is fragrant, about 2-3 minutes.",
    "Cook Mushrooms: Add the sliced mushrooms to the pot and cook until they release their liquid and begin to brown, about 5-7 minutes.",
    "Make Roux: Sprinkle the flour over the mushrooms and stir well to combine. Cook for another 1-2 minutes to cook off the raw flour taste.",
    "Add Broth: Gradually add the vegetable or chicken broth to the pot, stirring constantly to avoid lumps from forming. Bring to a simmer and cook for 10-15 minutes, stirring occasionally, until mushrooms are tender and soup has thickened slightly.",
    "Blend (Optional): For a creamier texture, you can blend the soup using an immersion blender or transfer it in batches to a blender. Blend until smooth and return to the pot.",
    "Add Cream: Stir in the heavy cream and heat through gently. Season with salt and pepper to taste.",
    "Serve: Ladle the mushroom soup into bowls. Garnish with fresh thyme or parsley if desired. Serve hot with crusty bread or crackers.",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal text-sm px-12">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Mushroom;
