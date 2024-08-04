function Mapo() {
  const steps = [
    "Prepare the Tofu:",
    "Cook the Pork:",
    "Add the Bean Pastes:",
    "Cook with Broth:",
    "Add Tofu and Simmer:",
    "Thicken the Sauce:",
    "Serve:",
  ];

  return (
    <div>
      <div className="py-4">
        <div className="font-bold text-base mb-4">Instructions:</div>
        <ol className="list-decimal px-12 text-sm">
          <li className="mb-2">
            {Mapo[0]}
            <ul className="list-disc px-6">
              <li>
                Cut the tofu into cubes and set aside. If using soft tofu,
                handle gently to avoid breaking.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[1]}
            <ul className="list-disc px-6">
              <li>
                Heat vegetable oil in a large pan or wok over medium heat. Add
                the minced garlic, ginger, and white parts of the green onions.
                Stir-fry until fragrant, about 1-2 minutes.
              </li>
              <li>
                Add the ground pork to the pan. Break up the pork with a spatula
                and cook until it is no longer pink.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[2]}
            <ul className="list-disc px-6">
              <li>
                Add doubanjiang and chili bean paste (if using) to the pan.
                Stir-fry for another minute to release the flavors.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[3]}
            <ul className="list-disc px-6">
              <li>
                Pour in the chicken or vegetable broth. Stir well to combine
                with the pork mixture.
              </li>
              <li>
                Add soy sauce, sugar, and ground Sichuan peppercorns (if using).
                Mix well and bring to a simmer.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[4]}
            <ul className="list-disc px-6">
              <li>
                Gently add the tofu cubes to the pan. Be careful not to stir too
                vigorously to avoid breaking the tofu.
              </li>
              <li>
                Allow the tofu to simmer in the sauce for 5-7 minutes, or until
                heated through and infused with the flavors of the sauce. Taste
                and adjust seasoning with salt if needed.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[5]}
            <ul className="list-disc px-6">
              <li>
                Stir the cornstarch mixture to recombine and then pour it into
                the pan. Gently stir to combine and simmer for another 1-2
                minutes until the sauce thickens to your desired consistency.
              </li>
            </ul>
          </li>

          <li className="mb-2">
            {Mapo[6]}
            <ul className="list-disc px-6">
              <li>
                Sprinkle the green parts of the chopped green onions over the
                Mapo Tofu.
              </li>
              <li>Serve hot with steamed rise</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Mapo;
