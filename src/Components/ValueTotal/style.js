import styled from "styled-components";

export const AllValue = styled.div`
  width: 100%;
  height: 95px;
  background-color: #f5f5f5;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  border-top: 3px solid #e0e0e0;

  div {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 14px;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      color: #828282;
    }

  
  }
  button {
    margin-bottom: 10px;

    width: 95%;
    height: 40px;

    border: none;
    border-radius: 5px;

    background-color: #e0e0e0;
    color: #828282;
  }
  button:hover {
    cursor: pointer;
    opacity: 70%;
  }
`