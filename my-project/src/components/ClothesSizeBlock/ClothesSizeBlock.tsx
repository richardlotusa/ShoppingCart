import { useState } from "react";
import { useProductContext } from "../../contexts/ProductContextProvider";
import { availableSizes } from "../../constants/constants";
import * as S from "./style";

const ClothesSizeBlock = () => {
  const { filterProducts } = useProductContext();
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
      <S.ContainerStyle>
        {availableSizes.map((size) => (
          <S.CheckboxLabel key={size}>
            <input
              type="checkbox"
              // checked={selectedSizes.includes(size)} // нужен ли?
              onChange={() => toggleCheckbox(size)}
            />
            <span className="checkmark">{size}</span>
          </S.CheckboxLabel>
        ))}
      </S.ContainerStyle>
    </S.Container>
  );
};

export default ClothesSizeBlock;
