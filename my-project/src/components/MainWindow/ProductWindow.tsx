import * as S from "./style";
import { useProductContext } from "../../contexts/ProductContextProvider";
import BlockHeaderProduct from "./BlockHeaderProduct";

const ProductWindow = () => {
  const { filteredProducts, addProductToCart, setCartOpen } =
    useProductContext();

  return (
    <S.Container>
      <S.Header>
        <BlockHeaderProduct />
      </S.Header>
      <S.ProductsContainer>
        {filteredProducts.map((product) => (
          <S.ProductItem key={product.sku}>
            <S.Image src={product.imgURL} alt={product.title} />
            <S.Title>{product.title}</S.Title>

            <span style={{ fontWeight: "600" }}>Sizes: </span>
            {product.availableSizes.join(", ")}

            <S.Price>${product.price}</S.Price>
            <S.BuyButton
              onClick={() => {
                addProductToCart(product);
                setCartOpen(true);
              }}
            >
              Add to cart
            </S.BuyButton>
          </S.ProductItem>
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default ProductWindow;
