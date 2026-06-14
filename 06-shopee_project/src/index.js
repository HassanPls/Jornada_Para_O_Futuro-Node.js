import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];
const myWishList = [];

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborguini", 39.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

// await cartService.delAllItens(myWishList, item2.name);
await cartService.delItem(cart, item2)

console.log("Welcome to the your Shopee Cart!");

await cartService.displayCart(cart)
