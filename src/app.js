import React, { useCallback } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import ShoppingCartCalc from "./components/shopping-cart-calc";
import ShoppingCart from "./components/shopping-cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

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

    onAddItem: useCallback(
      (code) => {
        store.addItemShoppingCart(code);
      },
      [store]
    ),
  };

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <Controls onAdd={callbacks.onAddItem} title={"Перейти"} />
        <ShoppingCartCalc list={list} />
        <List
          list={list}
          // onDeleteItem={callbacks.onDeleteItem}
          onAddItem={callbacks.onAddItem}
        />
      </PageLayout>
      <ShoppingCart list={list} />
    </>
  );
}

export default App;
