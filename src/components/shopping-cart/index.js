import React, { useState, useCallback } from "react";
import "./style.css";
import List from "../list";
import Controls from "../controls";
import Head from "../head";
import PageLayout from "../page-layout";
import { getSum, getFormatNumber } from "../../utils";

function ShoppingCart({ list, setIsOpen, isOpen, store }) {
  // const [isOpen, setIsOpen] = useState(true);

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),
    // onSelectItem: useCallback(
    //   (code) => {
    //     store.selectItem(code);
    //   },
    //   [store]
    // ),
    // onClose: useCallback(() => {
    //   store.addItemShoppingCart(code);
    // }, [store]),
    // onClose: () => {
    //   console.log(123);
    //   setIsOpen(false);
    // },
  };

  const goods = list.filter((el) => el.countShoppingCart);

  return (
    <div
      className="ShoppingCart"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <PageLayout height={407}>
        <Head title="Корзина" />
        <Controls setIsOpen={setIsOpen} title={"Закрыть"} isOpen={isOpen} />
        {goods.length ? (
          <>
            <List
              list={goods}
              onDeleteItem={callbacks.onDeleteItem}
              btnTitle={"Удалить"}
              showCount={true}
              // onAddItem={callbacks.onAddItem}
            />
            <div className="ShoppingCart-sum">
              <span className="ShoppingCart-sum-text">Итого</span>
              {getFormatNumber(getSum(list))} ₽
            </div>
          </>
        ) : (
          <h1 className="ShoppingCart-empty">Корзина пуста</h1>
        )}
      </PageLayout>
    </div>
  );
}

export default ShoppingCart;
