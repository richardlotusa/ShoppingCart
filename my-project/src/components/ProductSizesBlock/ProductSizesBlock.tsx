import { useState } from "react";
import { useProductContext } from "../../contexts/ProductContextProvider";
import * as S from "./style";

const ClothesSizeBlock = () => {
  const { filterProducts, availableSizes } = useProductContext();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleCheckbox = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updatedSizes);
    filterProducts(updatedSizes);
  };

  return (
    <S.Container>
      <S.Title>Sizes:</S.Title>
      <S.SizesContainer>
        {availableSizes.map((size) => (
          <S.CheckboxLabel>
            <input type="checkbox" onChange={() => toggleCheckbox(size)} />
            <span className="checkmark">{size}</span>
          </S.CheckboxLabel>
        ))}
      </S.SizesContainer>
    </S.Container>
  );
};

export default ClothesSizeBlock;
