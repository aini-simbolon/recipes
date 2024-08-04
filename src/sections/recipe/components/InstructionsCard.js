function Instructions() {
  const Instructions = [
    "Prepare the Salad Ingredients:",
    "Make the Creamy Dressing:",
    "Combine the Salad and Dressing:",
    "Add the Finishing Touch:",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Instructions[0]}
            <ul className="list-disc px-6">
              <li> Wash and dry the mixed greens</li>
              <li>
                In a large salad bowl, combine the mixed greens, cherry
                tomatoes, cucumber, red bell pepper, red onion, cooked chicken
                breast (if using), shredded carrots and black olives.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Instructions[1]}
            <ul className="list-disc px-6">
              <li>
                In a medium bowl, whisk together the mayonnaise, Greek yogurt,
                Dijon mustard, lemon juice, apple cider vinegar, and minced
                garlic.
              </li>
              <li>
                Add the chopped dill, and season with salt and pepper to taste.
              </li>
              <li>Whisk until the dressing is smooth and creamy.</li>
            </ul>
          </li>

          <li className="mb-2">
            {Instructions[2]}
            <ul className="list-disc px-6">
              <li>Pour the creamy dressing over the salad.</li>
              <li>
                Toss the salad gently until all the ingredients are evenly
                coated with the dressing.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Instructions[3]}
            <ul className="list-disc px-6">
              <li>Sprinkle the crumbled feta cheese on top of the salad.</li>
            </ul>
          </li>

          <li className="mb-2">
            {Instructions[4]}
            <ul className="list-disc px-6">
              <li>
                Serve the creamy salad immediately. It can be enjoyed as a main
                dish or a side salad.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Instructions;
