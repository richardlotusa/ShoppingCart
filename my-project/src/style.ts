import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family: Arial, sans-serif;
  }
`;

export const WrapperContainers = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftContainer = styled.div`
  flex: 0 0 22%;
  height: 400px;
`;

export const RightContainer = styled.div`
  flex: 0 0 78%;
  max-height: 1200px;
`;
