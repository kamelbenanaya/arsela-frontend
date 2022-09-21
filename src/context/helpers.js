import React from "react";

export const updateCartTotalItems = (cartProducts) => {
  let totalItemInside = 0;
  console.log("everything", cartProducts);
  cartProducts.map((e, index) => {
    totalItemInside = e.quantity + totalItemInside;
  });

  return totalItemInside;
};

export const addItemToCart = (item, cartProducts) => {
  const IsProductInCart =
    cartProducts.filter((e) => e.productId === item.productId).length > 0;
  if (IsProductInCart) {
    let newCardProduct = [...cartProducts];
    var index = newCardProduct.findIndex((i) => i.productId === item.productId);
    const ProductPriceintial = newCardProduct[index].productPrice;
    // console.log("🚀 ~ file: Card.js ~ line 53 ~ addItem ~ ProductPriceintial", ProductPriceintial)
    const ProductPricePromo = newCardProduct[index].priceAfterPromo;

    item.quantity = newCardProduct[index].quantity + 1;
    console.log(
      "🚀 ~ file: Card.js ~ line 61 ~ addItem ~ newCardProduct[index].quantity",
      newCardProduct[index].quantity
    );

    newCardProduct[index].productPrice = ProductPriceintial * item.quantity;
    newCardProduct[index].priceAfterPromo = ProductPricePromo * item.quantity;
    console.log(
      "🚀 ~ file: Card.js ~ line 59 ~ addItem ~ newCardProduct[index].productPrice",
      newCardProduct[index].productPrice
    );
    item.productPrice = newCardProduct[index].productPrice;
    item.priceAfterPromo = newCardProduct[index].priceAfterPromo;
    newCardProduct[index] = item;

    return newCardProduct;
  } else {
    console.log("else");
    const newCardProduct = [...cartProducts, item];

    return newCardProduct;
  }
};
export function incrementCount(cartProducts, productId) {
  const resIncrementCount = cartProducts.map((e) => {
    if (e.productId === productId) {
      return {
        ...e,
        quantity: e.quantity + 1,
        productPrice: e.intialprice * (e.quantity + 1),
        priceAfterPromo: e.intialpricePromo * (e.quantity + 1),
      };
    } else {
      return e;
    }
  });
  return resIncrementCount;
}
export function decrementCount(cartProducts, productId) {
  const resDecrementCount = cartProducts.map((e) => {
    if (e.productId === productId) {
      return {
        ...e,
        quantity: e.quantity - 1,
        productPrice: e.intialprice * (e.quantity - 1),
        priceAfterPromo: e.intialpricePromo * (e.quantity - 1),
        // quantity : e.quantity = 0
      };
    } else {
      return e;
    }
  });
  return resDecrementCount;
}
export function removeitem(cartProducts, productId) {
  const index = cartProducts.findIndex((i) => i.productId === productId);
 return cartProducts.filter((r) => r.productId !== cartProducts[index].productId);
}
