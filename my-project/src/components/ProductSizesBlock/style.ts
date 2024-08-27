import styled from "styled-components";

export const Container = styled.div`
  padding: 5% 15%;
  width: 100%;
  height: 100%;
`;

export const SizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: x-small;
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  width: 35px;
  height: 35px;
  font-size: 0.8em;
  margin-bottom: 20px;
  margin-right: 8px;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;

  &:hover input ~ .checkmark {
    border: 1px solid black;
  }

  input:checked ~ .checkmark {
    background-color: black;
    color: #ececec;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-sizing: border-box;
    line-height: 35px;
    text-align: center;
    color: black;
    background-color: #ececec;
    border: 1px solid transparent;
  }
`;

//
