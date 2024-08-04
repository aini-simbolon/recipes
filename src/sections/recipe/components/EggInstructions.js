function Egg() {
  const steps = [
    "Prepare the Chicken:",
    "Cook the Chicken:",
    "Seasoning:",
    "Prepare the Egg:",
    "Make egg rolls:",
    "Roll the Egg Chicken Roll:",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Egg[0]}
            <ul className="list-disc px-6">
              <li>
                Heat some oil in a pan over medium heat. Add the sliced onions
                and green chilies (if using) and sauté until the onions turn
                translucent.
              </li>
              <li>
                Add the ginger-garlic paste and sauté for another minute until
                fragrant.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[1]}
            <ul className="list-disc px-6">
              <li>
                Push the onions to the side of the pan and add the sliced
                chicken breasts. Cook until the chicken is fully cooked and
                slightly browned, stirring occasionally.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[2]}
            <ul className="list-disc px-6">
              <li>
                Add turmeric powder, cumin powder, coriander powder, red chili
                powder, and salt to the chicken. Mix well to coat the chicken
                evenly with the spices. Cook for another 2-3 minutes until the
                spices are fragrant and well combined with the chicken. Remove
                from heat and set aside.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[3]}
            <ul className="list-disc px-6">
              <li>In a bowl, beat the eggs well with a pinch of salt.</li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[4]}
            <ul className="list-disc px-6">
              <li>
                Heat a non-stick frying pan over medium heat and add a little
                oil.
              </li>
              <li>
                Pour a thin layer of beaten eggs into the pan and tilt the pan
                to spread the egg evenly, making a thin omelette. Cook until the
                bottom is set and the top is still slightly runny.
              </li>
              <li>
                Place a portion of the cooked chicken mixture in the center of
                the egg omelette.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[5]}
            <ul className="list-disc px-6">
              <li>
                Carefully fold the sides of the egg omelette over the chicken
                mixture to form a roll. Continue rolling until you have a tight
                roll.
              </li>
              <li>
                Remove from the pan and set aside. Repeat with the remaining
                eggs and chicken mixture to make more rolls.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Egg[6]}
            <ul className="list-disc px-6">
              <li>
                Serve the egg chicken rolls warm, either on their own or wrapped
                in tortilla wraps or flatbreads. Optionally, you can serve with
                a side salad or your favorite sauce.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Egg;
