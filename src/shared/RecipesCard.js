export default function RecipesCard(props) {
  const title = props.title;
  const img = props.img;
  return (
    <div style={{ width: "300px" }}>
      <img
        style={{
          width: "100%",
          height: "200px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          objectFit: "cover",
          marginTop: "50px",
        }}
        src={img}
        alt={title}
      />
      <p className="font-bold text-xl pt-2">{title}</p>
    </div>
  );
}
