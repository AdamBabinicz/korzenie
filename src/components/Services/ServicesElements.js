import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 800px; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media screen and (max-width: 480px) {
    max-height: 100%;
    padding: 1rem 0 2rem 0;
    /* height: 1300px; */
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(1, 1fr); */
  align-items: center;
  grid-gap: 10px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: rgb(245, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  width: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: rgb(245, 243, 243);
  margin-bottom: 48px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 24px;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #333;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #333;
`;
