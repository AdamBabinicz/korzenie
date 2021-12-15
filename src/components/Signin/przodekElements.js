import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 10rem;
  display: grid;
  place-items: center;

  @media only screen and (max-width: 678px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 5rem;

  @media only screen and (max-width: 678px) {
    padding: 0 2rem;
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    font-family: "Verdana", sans-serif;

    span {
      color: gray;
      font-weight: 100;
      font-family: "Verdana", sans-serif;
    }
  }

  p {
    font-size: 1.3rem;
    font-family: "Tahoma", sans-serif;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export const Icon = styled(Link)`
  /* margin-left: 32px; */
  /* margin-top: 32px; */
  text-decoration: none;
  font-weight: 100;
  color: rgb(90, 89, 89);
  color: rgb(170, 169, 169);
  font-size: 32px;
  transition: all 0.3s ease-in-out;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  &:hover {
    color: #fff;
  }
`;
