import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
  @media (max-width: 530px){
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
export const ManageButton = styled.button`
    background: #6c7c51;
    padding: 10px;
    border-radius: 15px;
    &:hover {
        background: #abbe8b;
        transform: translateY(2px);
    }
  @media (max-width: 530px){
    width: 150px;
  }
`;

