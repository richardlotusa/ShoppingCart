import styled from "styled-components";

export const Container = styled.div``;

export const HeadMain = styled.div`
  height: 50px;
`;

export const ClothesWindow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  position: relative;
`;

export const BuyButton = styled.button`
  font-size: medium;
  color: #fff;
  padding: 17px 0;
  cursor: pointer;
  width: 100%;
  border: none;
  margin-top: 10px;
  background-color: black;

  &:hover {
    background-color: rgb(198, 168, 35);
    transition: 0.2s;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

export const ProductItem = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  position: relative;

  &:hover {
    ${Image} {
      transform: scale(1.02);
    }
    ${BuyButton} {
      background-color: rgb(198, 168, 35);
      transition: 0.2s;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.1em;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
`;
