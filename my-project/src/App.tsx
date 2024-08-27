import Header from "./components/Header/Header";
import ClothesWindow from "./components/MainWindow/ProductWindow";
import ProductSizesBlock from "./components/ProductSizesBlock/ProductSizesBlock";
import { ProductProvider } from "./contexts/ProductContextProvider";

import * as S from "./style";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <S.WrapperContainers>
        <ProductProvider>
          <S.LeftContainer>
            <ProductSizesBlock />
          </S.LeftContainer>
          <S.RightContainer>
            <ClothesWindow />
          </S.RightContainer>
        </ProductProvider>
      </S.WrapperContainers>
    </>
  );
}

export default App;
