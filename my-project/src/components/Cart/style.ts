import styled from "styled-components";

interface IContainer {
  isopen: number;
}

//need scroll bar style
export const BlockCartContainer = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isopen }) => (isopen ? "0" : "-100%")};
  width: 450px;
  height: 100%;
  background-color: rgb(27, 26, 32);
  box-sizing: border-box;
  z-index: 100;
  transition: right 0.4s ease;
`;

export const CartContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const CloseCartButton = styled.button`
  position: absolute;
  top: 0;
  left: -50px;
  width: 50px;
  height: 50px;
  border: 0;
  padding: 0;
  background-color: rgb(27, 26, 32);
  color: #ececec;
  font-size: 15px;
  cursor: pointer;
  z-index: 101;

  &:hover {
    color: #fff;
    background-color: black;
  }
`;

//Корзина
export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: black;

  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 2;

  &:hover {
    filter: brightness(85%);
  }
`;

export const CartHeader = styled.div`
  color: #ececec;
  padding: 45px 0;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  background-image: url("/imgs/cart-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

export const CartTitle = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
`;

export const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: rgb(198, 168, 35);
  position: absolute;
  bottom: -2px;
  right: 5px;
`;

export const ItemCartContainer = styled.div`
  position: relative;
  min-height: 280px;
  padding-bottom: 200px;
`;

export const ItemCartEmpty = styled.p`
  color: #ececec;
  text-align: center;
  line-height: 40px;
`;

export const ItemsCart = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5%;

  &::before {
    content: "";
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  height: auto;
  margin-right: 3%;
`;

export const Details = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  color: #ececec;
  margin: 0;
`;

export const Desc = styled.p`
  color: #5b5a5e;
  margin: 0;
`;

export const Price = styled.p`
  display: inline-block;
  vertical-align: middle;
  color: rgb(234, 191, 0);
  text-align: right;
  position: absolute;
  right: 0;
  top: 25px;
`;

export const Quantity = styled.div`
  display: inline-block;
  color: #5b5a5e;
`;

export const ControlButtons = styled.div`
  position: relative;
  width: 40%;
  display: inline-block;
  vertical-align: middle;
`;

export const DeleteButton = styled.div`
  width: 14px;
  height: 15px;
  background-image: url("/imgs/delete-icon.png");
  top: -5px;
  right: 0;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  border: 0;

  &:hover {
    background-position-x: -15px;
  }
`;

export const ChangeQuantity = styled.button`
  color: #b7b7b7;
  border: 0;
  background-color: black;
  width: 25px;
  height: 25px;

  &:disabled {
    opacity: 0.2;
  }
`;

export const CartSummary = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: rgb(27, 26, 32);

  &::before {
    content: "";
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;

export const Sub = styled.p`
  width: 20%;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
  padding: 20px 0;
`;

export const SubPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: right;
  color: #5b5a5e;
  display: inline-block;
`;

export const SubPriceValue = styled.p`
  position: relative;
  top: -7px;
  color: rgb(234, 191, 0);
  font-size: 22px;
  margin: 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: #ececec;
  text-transform: uppercase;
  background-color: #0c0b10;
  text-align: center;
  padding: 17px 0;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
  font-size: medium;

  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
    filter: brightness(85%);
  }
`;
