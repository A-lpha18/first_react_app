import Message from "../Message";

function ListGroup() {
  let items = ["Kolkata", "sodepur", "London"];
  items = [];

  return (
    <>
      <h1>List Item</h1>
      {Message}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
