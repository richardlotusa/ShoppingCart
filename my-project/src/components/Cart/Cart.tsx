import * as S from "./style";
import { useCart } from "../../contexts/CartContextProvider";

const Cart = () => {
  const {
    products,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    isOpen,
    setCartOpen,
    totalPrice,
    totalQuantity,
  } = useCart();

  const handleToggleCart = () => {
    setCartOpen(!isOpen);
  };

  const handleCloseCart = () => {
    setCartOpen(!isOpen);
  };

  return (
    <>
      <S.CartButton onClick={handleToggleCart}>
        <img src="/imgs/cart-icon.png" alt="Cart Icon" />
        <S.CartQuantity>{totalQuantity}</S.CartQuantity>
      </S.CartButton>

      <S.BlockCartContainer isopen={isOpen ? 1 : 0}>
        <S.CartContainer>
          <S.CloseCartButton onClick={handleCloseCart}>
            <span>X</span>
          </S.CloseCartButton>
          <S.CartHeader>
            <S.CartIcon>
              <S.CartQuantity>{totalQuantity}</S.CartQuantity>
            </S.CartIcon>

            <S.CartTitle>Cart</S.CartTitle>
          </S.CartHeader>

          <S.ItemCartContainer>
            {products.length === 0 ? (
              <S.ItemCartContainerSectionIsEmpty>
                Add some products in the cart <br />
                :)
              </S.ItemCartContainerSectionIsEmpty>
            ) : (
              products.map((product) => (
                <S.ItemCartContainerSectionNotEmptry
                  key={product.id}
                  style={{ display: "flex" }}
                >
                  <S.Img src={product.imgURL} alt={product.title}></S.Img>
                  <S.Details>
                    <S.Title>{product.title}</S.Title>
                    <S.Desc>{product.availableSizes[0]}</S.Desc>
                    <S.Quantity>Quantity: {product.quantity}</S.Quantity>
                  </S.Details>

                  <S.OtherInfoAndButtons>
                    <S.DeleteButton
                      onClick={() => removeProduct(product.id)}
                    ></S.DeleteButton>
                    <S.Price>$ {product.price}</S.Price>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <S.ChangeQuantity
                        onClick={() => decreaseProductQuantity(product.id)}
                        disabled={product.quantity === 1 ? true : false}
                      >
                        -
                      </S.ChangeQuantity>

                      <S.ChangeQuantity
                        onClick={() => increaseProductQuantity(product.id)}
                      >
                        +
                      </S.ChangeQuantity>
                    </div>
                  </S.OtherInfoAndButtons>
                </S.ItemCartContainerSectionNotEmptry>
              ))
            )}
          </S.ItemCartContainer>
          <S.CartFooter>
            <S.Sub>SUBTOTAL</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>$ {totalPrice.toFixed(2)}</S.SubPriceValue>
            </S.SubPrice>
            <S.CheckoutButton>CHECKOUT</S.CheckoutButton>
          </S.CartFooter>
        </S.CartContainer>
      </S.BlockCartContainer>
    </>
  );
};

export default Cart;
