import styled from "styled-components";

export const HeadPage = styled.header`
  width: 100%;
  height: 70px;
  background-color: #F5F5F5;

  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

 .base {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;

    .logo {
    width: 120px;
    display: flex;
    align-items: center;
    
    h2 {
      cursor: pointer;
    }

    h5 {
      color: red;
      margin-left: 5px;
      margin-top: 30px;

      display: flex;

      cursor: pointer;
    }
  }
  .search {

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #f5f5f5;
    border-radius: 8px;

    background-color: #fff;
    padding: 0 15px 0 10px;
    height: 45px;


    input {
      background-color: transparent;
      border: none;
      outline: 0;
    }
    button {
      background-color: #27AE60;
      color: #fff;

      font-size: 10px;
      padding: 9px;

      border: none;
      border-radius: 5px;
    }
    button:hover {
      opacity: 70%;
      cursor: pointer;
    }

    @media screen and (max-width: 780px) {
      input {
        width: 150px;
        font-size: 12px;
      }
    }
  }
}
  
` 