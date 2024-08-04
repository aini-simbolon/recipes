function kebabs() {
  const steps = [
    "Prepare the Meat Mixture:",
    "Shape the Kebabs:",
    "Cook the Kebabs:",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {kebabs[0]}
            <ul className="list-disc px-6">
              <li>
                In a large bowl, combine the ground meat, grated onion, minced
                garlic, ground cumin, ground coriander, paprika, sumac (if
                using), cayenne pepper (if using), salt, black pepper, and
                chopped parsley or cilantro. Mix well until all the ingredients
                are evenly combined.{" "}
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {kebabs[1]}
            <ul className="list-disc px-6">
              <li>
                Take a handful of the meat mixture and shape it into long,
                cylindrical kebabs (about 4-5 inches long and 1 inch thick).
                Thread the meat onto skewers if using wooden or metal skewers.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {kebabs[2]}
            <ul className="list-disc px-6">
              <li>
                Preheat a grill or grill pan over medium-high heat. Brush the
                kebabs lightly with olive oil.
              </li>
              <li>
                Place the kebabs on the grill and cook for about 4-5 minutes on
                each side, or until they are cooked through and have nice grill
                marks. You can also cook them in a hot oven (broil) or on a
                stovetop grill pan.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {kebabs[3]}
            <ul className="list-disc px-6">
              <li>
                Once cooked, remove the kebabs from the grill and let them rest
                for a few minutes.
              </li>
              <li>
                Serve the kebabs hot with rice or flatbread, along with salad
                and your choice of sauces such as tzatziki (yogurt and cucumber
                sauce), hummus, or tahini sauce.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default kebabs;
