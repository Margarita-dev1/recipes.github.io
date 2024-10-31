import styled from "styled-components";

export const Wrapper = styled.div`
    width: 700px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    gap: 10px;
`;
export const ActiveImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    
`;
export const Nav = styled.div<{disabled?:boolean}>`
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    color: ${({disabled}) => disabled ? 'gray' : 'black'};
`;
