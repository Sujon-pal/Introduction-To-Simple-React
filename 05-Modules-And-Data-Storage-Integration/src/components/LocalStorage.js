// Get Cart from Local Storage

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }

  return [];
};

// Save Cart to Local Storage
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// Add Item to Cart

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();

  // new cart with spread operator
  const newCart = [...cart, id];

  // save updated cart
  saveCartToLocalStorage(newCart);
};

// const addItemToCartLocalStorage = (id) => {
//   const cart = getCartFromLocalStorage();

//   if (!cart.includes(id)) {
//     const newCart = [...cart, id];
//     saveCartToLocalStorage(newCart);
//   }
// };

export {getCartFromLocalStorage,addItemToCartLocalStorage}