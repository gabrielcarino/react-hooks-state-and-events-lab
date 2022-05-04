import React, {useState} from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false);
  const handleClick = () => {
    setInCart((inCart) = !inCart)
  };
  const itemClass = inCart ? "in-cart" : "";
  const buttonClass = inCart ? "remove" : "add";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
