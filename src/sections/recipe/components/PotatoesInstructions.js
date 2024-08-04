function Potatoes() {
  const steps = [
    "Cut the potatoes into small cubes or thin slices, depending on your preference. Ensure they are evenly sized for even cooking.",
    "Soak the potato pieces in cold water for about 30 minutes. This helps remove excess starch from the potatoes, resulting in crispier fries.",
    "After soaking, drain and pat dry the potato pieces with a towel or kitchen paper to remove excess moisture.",
    "Fry the potatoes until they are golden brown and crispy. Remove from the oil and drain on paper towels to absorb excess oil.",
    "While still hot, sprinkle the fried potatoes with salt and any additional seasonings you prefer, such as paprika powder or onion powder.",
    "Arrange the crispy crunch potatoes in a bowl or on a serving plate. They are ready to be enjoyed as a delicious snack or as a side dish.",
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

export default Potatoes;
