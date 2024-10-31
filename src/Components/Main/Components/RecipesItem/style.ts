import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid gray;
  border-radius: 15px;
    width: 700px;
    height: 200px;
    padding: 30px;
    display: flex;
    gap: 25px;
    cursor: pointer;
`;
export const ItemImage = styled.img`
    width: 210px;
  object-fit: contain;
`;
export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 40px;
`;
export const ItemName = styled.div`
    font-size: 25px;
    font-weight: 600;
`;
export const Delete = styled.img`
    width: 25px;
    object-fit: contain;
    filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(10%) contrast(119%);
    &:hover{
        filter: invert(29%) sepia(37%) saturate(1561%) hue-rotate(157deg) brightness(65%) contrast(101%);
    }
    
`;
export const CookTime = styled.div`
    
`;
export const Difficult = styled.div`
    
`;