import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  min-height: 100vh;
  width: 100%;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0; */
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(133, 133, 133, 0.678) 0%,
    rgba(214, 214, 214, 0.534) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  p {
    text-align: center;
  }
`;

export const ContainerH1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
  color: rgb(245, 243, 243);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const GiTreeRootsIcon = styled.div`
  font-size: 3rem;
  color: rgb(170, 169, 169);
  margin-right: 1rem;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
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
  z-index: 1000;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ContainerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  /* margin: 0 auto; */
  padding: 0 50px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    max-width: 20rem;
  }
`;
export const FamilyH2 = styled(Link)`
  height: 100%;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  justify-content: center;
  padding: 1rem 2rem;
  /* margin-right: 1rem; */
  background: rgba(255, 255, 255, 0.609);
  text-align: center;
  /* white-space: nowrap; */
  color: #333;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 640px) {
    padding: 10px;
    margin-bottom: 1rem;
  }
`;

export const ContainerP = styled.p`
  font-size: 1.3rem;
  background: rgba(90, 89, 89, 0.6);
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;
export const ArrowIcon = styled.div`
  font-size: 3rem;
  color: rgb(90, 89, 89);
  margin: 1rem 0;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
