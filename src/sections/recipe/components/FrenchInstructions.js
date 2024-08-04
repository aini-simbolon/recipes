function French() {
  const steps = [
    "Prepare the Egg Mixture:",
    "Soak the Bread:",
    "Cook the French Toast:",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {French[0]}
            <ul className="list-disc px-6">
              <li>
                In a shallow bowl or dish, whisk together eggs, milk, vanilla
                extract (if using), and ground cinnamon (if using). Mix well
                until fully combined.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {French[1]}
            <ul className="list-disc px-6">
              <li>
                Heat a skillet or frying pan over medium heat and add a small
                amount of butter or oil to coat the pan.
              </li>
              <li>
                Dip each slice of bread into the egg mixture, turning to coat
                both sides evenly. Allow the bread to soak in the mixture for a
                few seconds, but don't let it become soggy.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {French[2]}
            <ul className="list-disc px-6">
              <li>
                Place the soaked bread slices onto the preheated skillet or
                frying pan. Cook for 2-3 minutes on each side, or until golden
                brown and cooked through.
              </li>
              <li>
                Adjust the heat as needed to ensure the French toast cooks
                evenly without burning.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {French[3]}
            <ul className="list-disc px-6">
              <li>
                Once cooked, remove the French toast slices from the pan and
                place them on a serving plate.
              </li>
              <li>
                Serve warm with maple syrup, powdered sugar, fresh fruits, or
                any other desired toppings.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default French;
