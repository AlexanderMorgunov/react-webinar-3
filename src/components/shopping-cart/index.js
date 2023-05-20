import React, { useState, useCallback } from "react";
import "./style.css";
import List from "../list";
import Controls from "../controls";
import Head from "../head";
import PageLayout from "../page-layout";
import { getSum, getFormatNumber } from "../../utils";

function ShoppingCart({ list, setIsOpen, isOpen, store }) {
  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),
  };

  const goods = list.filter((el) => el.countShoppingCart);

  return (
    <div
      className="ShoppingCart-modal"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="ShoppingCart">
        <PageLayout isModal={true}>
          <Head title="Корзина" />
          <Controls setIsOpen={setIsOpen} title={"Закрыть"} isOpen={isOpen} />
          {goods.length ? (
            <>
              <List
                list={goods}
                onSmthDo={callbacks.onDeleteItem}
                btnTitle={"Удалить"}
                showCount={true}
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
    </div>
  );
}

export default ShoppingCart;
