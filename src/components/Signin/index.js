import React from "react";
import { GiTreeRoots } from "react-icons/gi";
import { CgArrowBottomLeft } from "react-icons/cg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  GiTreeRootsIcon,
  ContainerH1,
  FamilyH2,
  ContainerWrap,
  ArrowIcon,
  ContainerP,
} from "./SigninElements";
import img1 from "../../images/1.png";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <GiTreeRootsIcon>
            <GiTreeRoots />
          </GiTreeRootsIcon>
          <Icon to="/">korzenie</Icon>
        </FormWrap>
        <ContainerH1>Praprzodkowie</ContainerH1>
        <ContainerWrap>
          <FamilyH2>Ambroży Gierczak</FamilyH2>
          <FamilyH2>Kunegunda</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 18xx</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Karol Gierczak ✝1903</FamilyH2>
          <FamilyH2>Tekla Kozyra ✝1909</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 18xx</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Paweł Gierczak ✝29.07.1935</FamilyH2>
          <FamilyH2>Katarzyna Czerwińska</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1887</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Jan Gierczak</FamilyH2>
          <FamilyH2>Agnieszka Baćmaga ✝08.11.1969</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 14.11.1917</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
      </Container>
    </>
  );
};

export default SignIn;
