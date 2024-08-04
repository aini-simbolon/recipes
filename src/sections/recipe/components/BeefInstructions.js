function Beef() {
  const steps = [
    "Prepare the Sauce:",
    "Marinate the Beef:",
    "Cook the Beef",
    "Flip the beef slices and cook for another 1-2 minutes, or until the beef is cooked through and nicely caramelized.",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Beef[0]}
            <ul className="list-disc px-6">
              <li>
                {" "}
                In a small bowl, combine soy sauce, mirin, sake (or sherry),
                brown sugar, minced garlic, and grated ginger. Stir until the
                sugar is dissolved. This is your teriyaki sauce
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Beef[1]}
            <ul className="list-disc px-6">
              <li>
                Place the thinly sliced beef in a shallow dish or a large
                zip-top bag. Pour half of the teriyaki sauce over the beef,
                reserving the other half for later. Toss the beef to coat evenly
                in the marinade. Cover (or seal the bag) and refrigerate for at
                least 30 minutes, or ideally up to 2 hours to allow the flavors
                to meld.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Beef[2]}
            <ul className="list-disc px-6">
              <li>
                Heat vegetable oil in a large skillet or wok over medium-high
                heat. Remove the beef from the marinade (discard the used
                marinade) and add it to the hot skillet in a single layer. Cook
                for 1-2 minutes without stirring to allow the beef to sear and
                brown on one side.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Beef;
