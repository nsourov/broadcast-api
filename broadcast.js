// Step 1: Create a Broadcast Channel
const cartChannel = new BroadcastChannel("cart_channel");

// Step 2: Send Cart Updates
function addToCart(itemName) {
  const updateMessage = `Added "${itemName}" to the cart.`;
  updateCartUI(updateMessage);
  cartChannel.postMessage(updateMessage);
}

// Step 3: Receive Cart Updates
cartChannel.addEventListener("message", (event) => {
  const receivedUpdate = event.data;
  updateCartUI(receivedUpdate);
});

// Function to update the cart UI
function updateCartUI(updateMessage) {
  const cartElement = document.getElementById("cart");
  const newItemElement = document.createElement("p");
  newItemElement.textContent = updateMessage;
  cartElement.appendChild(newItemElement);
}
