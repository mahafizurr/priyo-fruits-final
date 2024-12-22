import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      // Check if product exists in cart
      const existingProduct = state.cart.find((p) => p._id === product._id);
      if (existingProduct) {
        // Update quantity if product already exists
        return {
          cart: state.cart.map((p) =>
            p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      // Add new product with quantity 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product._id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product._id === productId ? { ...product, quantity } : product
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useStore;
