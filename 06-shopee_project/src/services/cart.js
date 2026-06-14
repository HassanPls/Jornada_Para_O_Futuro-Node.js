async function displayCart(userCart) {
  console.log("------------- SHOPEE CART ------------");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price} / ${item.quantity} / Total: ${item.subtotal()}`,
    );
  });
  console.log("Shopee Cart - Total Price: " + (await calcTotal(userCart)));
}

async function addItem(userCart, item) {
  userCart.push(item);
}

async function delItem(userCart, item) {
  const indexFounded = userCart.findIndex((p) => p.name === item.name);

  if (indexFounded == -1) {
    console.log("Item não encontrado!");
    return;
  }

  if (userCart[indexFounded].quantity > 1) {
    userCart[indexFounded].quantity -= 1;
  } else {
    delAllItens(userCart, item.name);
  }
}

async function delAllItens(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function calcTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export { displayCart, addItem, delItem, delAllItens, calcTotal };
