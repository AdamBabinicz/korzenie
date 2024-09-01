import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 7rem;
  display: grid;
  place-items: center;
  background: ${({ isOverlayVisible }) =>
    isOverlayVisible ? "rgba(0, 0, 0, 0.5)" : "#ccc"};
  transition: background 0.5s ease;

  @media only screen and (max-width: 678px) {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 900px;
  padding: 2rem 5rem;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  img {
    max-width: 100%;
    height: 300px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 678px) {
    padding: 1rem 2rem;
    margin: 1rem 0;
    width: auto;
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    font-family: "Verdana", sans-serif;

    @media only screen and (max-width: 678px) {
      font-size: 1.5rem;
    }

    span {
      color: gray;
      font-weight: 100;
      font-family: "Verdana", sans-serif;
    }
  }

  p,
  b {
    font-size: 1.3rem;
    font-family: "Tahoma", sans-serif;
    line-height: 1.4;
    margin-bottom: 1rem;

    @media only screen and (max-width: 678px) {
      font-size: 1.1rem;
    }
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  font-weight: 100;
  color: rgb(170, 169, 169);
  font-size: 32px;
  transition: all 0.3s ease-in-out;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  span {
    color: #ccc;
    display: block;
    align-self: center;
  }

  &:hover {
    color: #fff;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  width: 800px;
  text-align: center;
  position: relative;
  overflow-y: auto;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
    font-family: "Tahoma", sans-serif;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #000;
  }
`;
