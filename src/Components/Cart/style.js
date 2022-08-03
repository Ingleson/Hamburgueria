import styled from "styled-components";

export const ContainerCart = styled.aside`
  width: 310px;

  @media screen and (max-width: 905px) {
    width: 65%;
  }

  .green-head {
    background-color: #27ae60;
    width: 100%;
    height: 45px;

    display: flex;
    align-items: center;

    border-radius: 6px 6px 0 0;

    span {
      margin-left: 15px;
      color: #fff;

      font-weight: 600;
    }
  }
  .gray-cart {
    width: 100%;
    height: 200px;
    background-color: #f5f5f5;

    overflow-y: auto;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: ${({productsOnCart}) => productsOnCart.length > 0 ?
      'flex-start' 
      :
      'center' };
    align-items: center;

    border-radius:0 0 6px 6px;

    padding-left: 0;
    margin: 0;

    span {
      font-size: 18px;
      font-weight: 600;
    }

    p {
      font-size: 12px;
      color: #828282;
    }
  }
`

export const VoidCart = styled.li`
      
  width: 90%;
  height: 60px;

  margin-top: 10px;

  div {

    display: flex;
    flex-direction: row;

    img {
      width: 60px;
      height: 60px;

      background-color: #e0e0e0;

      border-radius: 6px;
    }

    .name-category-box {
      display: flex;
      flex-direction: column;

      height: 60px;
      width: 70%;

      margin-left: 15px;


      h4 {
        font-size: 15px;
        margin: 0;
      }
      span {
        font-size: 12px;
        color: #828282;
        margin: 0;
        margin-top: 15px;
      }
    }

    button {
      height: 20px;

      border: none;
      background-color: #F5F5F5;
      color: #828282;
    }
    button:hover {
      cursor: pointer;
      opacity: 70%;
    }
  }
`