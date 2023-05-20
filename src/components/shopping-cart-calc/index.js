import React from "react";
import { useState, useEffect } from "react";
import { plural } from "../../utils";
import { getCountGoods, getSum, getFormatNumber } from "../../utils";
import "./style.css";

function ShoppingCartCalc({ list }) {
  const [countGoods, setCountGoods] = useState(getCountGoods(list));

  useEffect(() => {
    setCountGoods(getCountGoods(list));
  }, [list]);

  const content = countGoods ? (
    <>
      В корзине: {countGoods}{" "}
      {plural(countGoods, {
        one: "товар",
        few: "товара",
        many: "товаров",
      })}{" "}
      /
      <span className="shoppingCartCalc-bold">
        {getFormatNumber(getSum(list))} ₽
      </span>
    </>
  ) : (
    <span>Корзина пуста</span>
  );

  return <div className="shoppingCartCalc">{content}</div>;
}

export default ShoppingCartCalc;
