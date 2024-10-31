import styled from "styled-components";

export const Wrapper = styled.div`
  background: antiquewhite;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  overflow-x: hidden;
  @media (max-width: 530px){
    width: 100vw;
  }
  @media (max-width: 765px){
    height: 100px;
  }
`;

export const Title = styled.div`
    color: #000;
    font-size: 50px;
    @media (max-width: 765px){
  font-size: 35px;
}
`;