function Tuna() {
  const steps = [
    "Cook the Rice:",
    "Prepare the Filling:",
    "Shape the Onigiri:",
    "Wrap with Nori (optional):",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Tuna[0]}
            <ul className="list-disc px-6">
              <li>
                Rinse the sushi rice under cold water until the water runs
                clear.
              </li>
              <li>
                Cook the rice according to the package instructions or in a rice
                cooker with slightly less water than usual for a firmer texture
                suitable for onigiri.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Tuna[1]}
            <ul className="list-disc px-6">
              <li>
                In a bowl, mix the drained tuna, mayonnaise, soy sauce, chopped
                green onions (if using), and salt to taste. Adjust seasoning as
                needed.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Tuna[2]}
            <ul className="list-disc px-6">
              <li>
                While the rice is still warm, wet your hands with water to
                prevent sticking. Take a small amount of rice (about 1/4 cup)
                and flatten it in your palm.
              </li>
              <li>
                Place a spoonful of the tuna mixture in the center of the rice
                and gently fold the rice around the filling, shaping it into a
                triangle or oval. Press firmly to pack the rice together.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Tuna[3]}
            <ul className="list-disc px-6">
              <li>
                If using nori seaweed, wrap a strip around the base of the
                onigiri or completely around it, sealing the edges with a bit of
                water to help it stick.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Tuna[4]}
            <ul className="list-disc px-6">
              <li>
                Serve the tuna mayonnaise onigiri immediately or pack them in a
                bento box or wrapped in plastic wrap for later.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Tuna;
