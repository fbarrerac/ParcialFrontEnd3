function Card({ data }) {
  return (
    <div>
      <h2>Información ingresada</h2>
      <p>Nombre: {data.nom}</p>
      <p>Color favorito: {data.color}</p>
    </div>
  );
}

export default Card;
