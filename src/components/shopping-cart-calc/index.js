import React from "react";
import { useState, useEffect } from "react";
import { getCountGoods, getSum, getFormatNumber } from "../../utils";
import "./style.css";

function ShoppingCartCalc({ list }) {
  const [countGoods, setCountGoods] = useState(getCountGoods(list));

  useEffect(() => {
    setCountGoods(getCountGoods(list));
  }, [list]);

  const content = countGoods ? (
    // toDo - применить фф-ю склонения слова - товара В корзине:{" "}
    <>
      В корзине: {countGoods} товара /
      <span className="shoppingCartCalc-bold">
        {getFormatNumber(getSum(list))} ₽
      </span>
    </>
  ) : null;

  return <div className="shoppingCartCalc">{content}</div>;
}

export default ShoppingCartCalc;
