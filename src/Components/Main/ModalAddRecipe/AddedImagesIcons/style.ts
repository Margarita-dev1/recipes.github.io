import styled from "styled-components";

export const IconsList = styled.div`
  display: flex;
  gap: 10px;
`;
export const IconBlock = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
object-fit: contain;
`;
export const SvgDelete = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  left: -10px;
`;