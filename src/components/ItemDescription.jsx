const ItemDescription = ({ name, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;

export { ItemDescription };
