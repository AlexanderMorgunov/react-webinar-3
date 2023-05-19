import React, { useState } from "react";
import "./style.css";

import List from "../list";
import Controls from "../controls";
import Head from "../head";
import PageLayout from "../page-layout";

function ShoppingCart({ list }) {
  const [isOpen, setIsOpen] = useState(false);

  const callbacks = {
    // onDeleteItem: useCallback(
    //   (code) => {
    //     store.deleteItem(code);
    //   },
    //   [store]
    // ),

    // onSelectItem: useCallback(
    //   (code) => {
    //     store.selectItem(code);
    //   },
    //   [store]
    // ),

    // onClose: useCallback(() => {
    //   store.addItemShoppingCart(code);
    // }, [store]),
    onClose: () => {
      setIsOpen(false);
    },
  };

  return (
    <div
      className="ShoppingCart"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <PageLayout>
        <Head title="Корзина" />
        <Controls onAdd={callbacks.onClose} title={"Закрыть"} />
        <List
          list={list.filter((el) => el.countShoppingCart)}
          // onDeleteItem={callbacks.onDeleteItem}
          onAddItem={callbacks.onAddItem}
        />
      </PageLayout>
    </div>
  );
}

export default ShoppingCart;
