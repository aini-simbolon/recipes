function Raspberry() {
  const steps = [
    "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
    "In another bowl, whisk together the buttermilk, egg, and melted butter.",
    "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay.",
    "Gently fold in the raspberries into the batter.",
    "Heat a non-stick skillet or griddle over medium heat. Add a small amount of butter or oil to coat the surface.",
    "Pour about 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface of the pancake and the edges begin to look set, about 2-3 minutes.",
    "Carefully flip the pancakes and cook on the other side until golden brown and cooked through, another 1-2 minutes.",
    "Transfer the cooked pancakes to a plate and keep warm. Repeat with the remaining batter, adding more butter or oil to the skillet as needed.",
    "Serve the raspberry pancakes warm, topped with additional fresh raspberries and your favorite toppings such as maple syrup, whipped cream, or powdered sugar.",
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

export default Raspberry;
