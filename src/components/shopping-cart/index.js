import React, { useState, useCallback } from "react";
import "./style.css";

import List from "../list";
import Controls from "../controls";
import Head from "../head";
import PageLayout from "../page-layout";

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

  return (
    <div
      className="ShoppingCart"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <PageLayout>
        <Head title="Корзина" />
        <Controls setIsOpen={setIsOpen} title={"Закрыть"} isOpen={isOpen} />
        <List
          list={list.filter((el) => el.countShoppingCart)}
          onDeleteItem={callbacks.onDeleteItem}
          btnTitle={"Удалить"}
          // onAddItem={callbacks.onAddItem}
        />
      </PageLayout>
    </div>
  );
}

export default ShoppingCart;
