function Macaroni() {
  const steps = [
    "Cook the Pasta:",
    "Make the Cheese Sauce:",
    "Combine Pasta and Cheese Sauce:",
    "Bake (Optional):",
    "serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Macaroni[0]}
            <ul className="list-disc px-6">
              <li>
                Cook the elbow macaroni according to package instructions in a
                large pot of salted boiling water until al dente. Drain and set
                aside.{" "}
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Macaroni[1]}
            <ul className="list-disc px-6">
              <li>
                In a large saucepan, melt the butter over medium heat. Once
                melted, stir in the flour and cook for about 1 minute, stirring
                constantly, to create a roux.
              </li>
              <li>
                Gradually whisk in the milk, a little at a time, until smooth
                and combined. Cook over medium heat, stirring constantly, until
                the mixture thickens and comes to a simmer.
              </li>
              <li>
                Reduce the heat to low. Stir in the shredded cheddar cheese and
                grated Parmesan cheese until melted and smooth. Season with
                salt, black pepper, paprika, and garlic powder, if using. Taste
                and adjust seasoning as needed.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Macaroni[2]}
            <ul className="list-disc px-6">
              <li>
                Add the cooked macaroni to the cheese sauce and stir until well
                coated and combined. Remove from heat.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Macaroni[3]}
            <ul className="list-disc px-6">
              <li>
                If you prefer a baked macaroni and cheese, preheat your oven to
                350°F (175°C). Transfer the macaroni and cheese mixture to a
                greased baking dish. Sprinkle breadcrumbs evenly over the top,
                if desired.
              </li>
              <li>
                Bake in the preheated oven for 20-25 minutes, or until bubbly
                and golden brown on top.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Macaroni[4]}
            <ul className="list-disc px-6">
              <li>
                Remove from the oven and let it cool slightly before serving.
                Garnish with additional black pepper or chopped parsley if
                desired.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Macaroni;
