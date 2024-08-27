import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProductType } from "../models/models";
import { useCart } from "./CartContextProvider";

export type ProductTypeContext = {
  products: IProductType[];
  addProductToCart: (product: IProductType) => void;
  isOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  filterProducts: (sizes: string[]) => void;
  filteredProducts: IProductType[];
  availableSizes: string[];
};

const ProductContext = createContext<ProductTypeContext | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

type ProductProviderType = { children: ReactNode };

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<IProductType[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const { addProduct, isOpen, setCartOpen } = useCart();

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3500/products");
      const data = await response.json();
      console.log("Fetched products:", data);

      const productSizes: string[] = data.reduce(
        (acc: string[], item: IProductType) => {
          return [...acc, ...item.availableSizes];
        },
        []
      );

      setAvailableSizes([...new Set(productSizes)]);

      // console.log("productSizes", mergeArr);

      setProducts(data);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProductToCart = (product: IProductType) => {
    addProduct({ ...product, quantity: 0 });
  };

  const filterProducts = (sizes: string[]) => {
    setSelectedSizes(sizes);
  };

  const filteredProducts = products.filter((product) =>
    selectedSizes.length === 0
      ? true
      : product.availableSizes.some((size) => selectedSizes.includes(size))
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        availableSizes,
        addProductToCart,
        isOpen,
        setCartOpen,
        filterProducts,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
