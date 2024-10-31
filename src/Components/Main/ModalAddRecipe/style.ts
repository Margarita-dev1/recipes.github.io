import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid gray;
    font-size: 20px;
    border-radius: 20px;
    width: 800px;
    height: max-content;
    background: antiquewhite;
    padding: 40px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const ModalHeader = styled.div`
    text-align: center;
    font-size: 30px;
    display: flex;
justify-content: space-between;
    border-bottom: 1px black solid;
    padding-bottom: 20px;
`;
export const Close = styled.img`
    padding-right: 20px;
    cursor: pointer;
`;
export const NewRecipeInfo = styled.div`
  display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const Label = styled.div`

`;
export const NewRecipeInput = styled.input`
    width: 300px;
    border: gray 1px solid;
    padding: 10px;
    border-radius: 10px;

    &:focus {
        border: #6c7c51 2px solid;
    }
`;
export const NewRecipeText = styled.textarea`
  width: 600px;
    border: gray 1px solid;
    padding: 10px;
    border-radius: 10px;
    resize: none;
    &:focus{
        border: #6c7c51 2px solid;
        outline:none;
    }
`;
export const UploadImage = styled.div`
  padding: 10px;
  width: max-content;
  border-radius: 15px;
  border: 1px gray solid;
  cursor: pointer;

  &:hover {
    background: #ec825d;
  }
`;

export const Button = styled.button<{disabled?:boolean}>`
  width: 200px;
  height: 50px;
  padding: 10px;
  background: ${({disabled}) => disabled ? 'gray' : 'white'};
  color: ${({disabled}) => disabled ? 'white' : 'black'}
  font-size: 20px;
  border: gray solid 1px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    background: ${({disabled}) => disabled ? 'gray' : '#ec825d'};
  }
`;
