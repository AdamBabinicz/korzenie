import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  z-index: 999;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;

  &.active {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 640px) {
    padding: 0 1rem;
  }
`;

export const PopupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-height: 90vh; /* Zmieniono na 90vh */
  max-width: 640px;
  background: #fff;
  border-radius: 8px;
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.5s ease;
  overflow-y: auto; /* Dodano overflow-y: auto */

  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (max-width: 640px) {
    max-height: 90vh; /* Dostosowanie maksymalnej wysokości na mniejszych ekranach */
    padding: 1rem; /* Zmniejszono padding */
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: transparent;

  img {
    max-width: 100%;
  }
`;
