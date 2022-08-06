import styled from 'styled-components';

export const ContainerProduct = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 0;

  width: 60%;

  @media screen and (max-width: 905px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  
    width: 120%;
    height: 400px;

    margin-left: 0;

    overflow-x: auto;

    li {
      width: 500px;
      height: 600px;

      margin-right: 10px;
    }

  }

  @media screen and (max-width: 980px) {
    width: 55%;
  }
  @media screen and (max-width: 945px) {
    width: 58%;
  }

  @media screen and (max-width: 1300px) {
    li {
      width: 300px;
      height: 330px;
    }
  }
  @media screen and (max-width: 1130px){
    li {
      width: 230px;
      height: 280px;
    }
  }
`

export const CardProduct = styled.li`
  min-width: 230px;
  min-height: 280px;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  margin-bottom: 15px;

  figure {
    width: 100%;
    height: 130px;
    background-color: #e0e0e0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 160px;
      height: 140px;
    }
  }

  div {
    margin-left: 10px;
    line-height: 15px;

    h3 {
      font-size: 14px;
      font-weight: 700;
    }

    span {
      font-size: 10px;
      color: #828282;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: #27AE60;
    }

    button {
      background-color: #27AE60;
      color: #fff;

      padding: 10px 20px;

      border: none;
      border-radius: 5px;
    }
    button:hover {
      cursor: pointer;
      opacity: 70%;
    }
  }
`