import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid gray;
    font-size: 20px;
    border-radius: 20px;
    width: 800px;
    height: max-content;
    background: antiquewhite;
    padding: 30px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

`;
export const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
`;
export const CLoseSvg = styled.img`
    cursor: pointer;
    &:hover{
        transform: translateY(1px);
    }
`;
export const RecipeText = styled.div`
    font-size: 18px;
    height: 200px;
    overflow: auto;
    border: #000 1px solid;
    padding: 15px;
    border-radius: 15px;
    &::-webkit-scrollbar { width: 0; }
`;
export const OtherInfo = styled.div`
    font-size: 18px;
`;

