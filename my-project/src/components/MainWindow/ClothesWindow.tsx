import * as S from "./style";
import { useProductContext } from "../../contexts/ProductContextProvider";
import HeadMain from "./HeadMain";

const ClothesWindow = () => {
  const { filteredProducts, addProductToCart, setCartOpen } =
    useProductContext();

  return (
    <S.Container>
      <S.HeadMain>
        <HeadMain />
      </S.HeadMain>
      <S.ClothesWindow>
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
      </S.ClothesWindow>
    </S.Container>
  );
};

export default ClothesWindow;
