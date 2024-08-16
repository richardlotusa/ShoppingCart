import GlobalStyle from "./App";
import Header from "./components/Header/Header";
import ClothesWindow from "./components/MainWindow/ClothesWindow";
import ClothesSizeBlock from "./components/ClothesSizeBlock/ClothesSizeBlock";
import { ProductProvider } from "./contexts/ProductContextProvider";

import * as S from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.AppContainer>
        <Header />
        <S.WrapperMainAndSizes>
          <ProductProvider>
            <S.LeftDiv>
              <ClothesSizeBlock />
            </S.LeftDiv>
            <S.RightDiv>
              <ClothesWindow />
            </S.RightDiv>
          </ProductProvider>
        </S.WrapperMainAndSizes>
      </S.AppContainer>
    </>
  );
}

export default App;
