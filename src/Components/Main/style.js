import styled from "styled-components";

export const BaseMain = styled.main`
  width: 90%;

  display: flex;
  margin: 0 auto;
  margin: 0;
  justify-content: space-between;

  margin-top: 25px;

  @media screen and (max-width: 905px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`