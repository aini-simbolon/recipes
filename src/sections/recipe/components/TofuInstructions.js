function Tofu() {
  const Tofu = [
    " Heat a little oil in a large pot or pan. Saute the onion and garlic until fragrant and translucent",
    " Add the diced tofu to the pot. Stir-fry briefly until the tofu edges are slightly browned",
    " Add the diced carrot and tomatoes. Stir well and sauté briefly until the vegetables are slightly softened",
    "Pour in the vegetable broth or chicken broth into the pot. Bring to a boil",
    " Stir in the tomato sauce, chili sauce (if using), sugar, salt, and black pepper to taste. Mix well",
    "Let the soup boil and simmer until all ingredients are cooked to your desired texture, about 10-15 minutes",
    " Ladle the Tofu Tomatoes Soup into serving bowls. Garnish with spring onions or parsley if desired. Serve hot as a comforting appetizer or main dish.",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          {Tofu.map((Tofu, index) => (
            <li key={index}>{Tofu}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Tofu;
