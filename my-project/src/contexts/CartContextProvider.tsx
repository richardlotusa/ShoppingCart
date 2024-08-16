import { useState, useContext, createContext, useEffect } from "react";
import { ICartProductType } from "../models/models";

interface CartContextType {
  products: ICartProductType[];
  addProduct: (product: ICartProductType) => void;
  removeProduct: (id: number) => void;
  increaseProductQuantity: (id: number) => void;
  decreaseProductQuantity: (id: number) => void;
  isOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  totalPrice: number;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ICartProductType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addProduct = (newProduct: ICartProductType) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === newProduct.id);
      if (existingProduct) {
        return prevProducts.map(
          (p) =>
            p.id === newProduct.id ? { ...p, quantity: p.quantity + 1 } : p //сюда поместить isOpen позже
        );
      } else {
        return [...prevProducts, { ...newProduct, quantity: 1 }];
      }
    });
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const increaseProductQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseProductQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const updateCartTotals = () => {
    const newTotalPrice = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    const newTotalQuantity = products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
    setTotalQuantity(newTotalQuantity);
  };

  useEffect(() => {
    updateCartTotals();
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        increaseProductQuantity,
        decreaseProductQuantity,
        isOpen,
        setCartOpen: setIsOpen,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
