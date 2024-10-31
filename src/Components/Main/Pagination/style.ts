import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    gap: 20px;
  font-size: 25px;
`;
export const NavButton = styled.div<{active?:boolean; disabled?:boolean}>`
    cursor:${({disabled})=> disabled ? 'not-allowed' : 'pointer'};
    color: ${({active,disabled}) => active ? 'cadetblue' : disabled ? 'gray':'black'};
    &:hover{
      color: cadetblue;
    }
`;
