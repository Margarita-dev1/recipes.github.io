import styled from "styled-components";


export const Wrapper = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
export const SortWindow = styled.div`
    width: 300px;
    border: black 1px solid;
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
export const Arrow = styled.img`
    width: 20px;
    height:20px;
`;
export const PopUpSort = styled.div`
    width: 300px;
    position: absolute;
    top: 50px;
    left: 0;
    border: black 1px solid;
    border-radius: 15px;
    background: antiquewhite;
    display: flex;
    flex-direction: column;

    div {
        border-bottom: 1px black solid;
        padding: 7px;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            color: cornflowerblue;
        }
    }
`;