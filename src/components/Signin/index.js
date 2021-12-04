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
          <FamilyH2>Ambroży&nbsp;Gierczak</FamilyH2>
          <FamilyH2>Kunegunda&nbsp;Koniak</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 18xx</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Karol&nbsp;Gierczak ✝1903</FamilyH2>
          <FamilyH2>Tekla&nbsp;Kozyra ✝1909</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 23.11.1857</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Paweł&nbsp;Gierczak ✝29.07.1935</FamilyH2>
          <FamilyH2>Katarzyna&nbsp;Czerwińska</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1887</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>u. 18.06.1891 Jan&nbsp;Gierczak</FamilyH2>
          <FamilyH2>u. 13.04.1894 Agnieszka&nbsp;Baćmaga ✝08.11.1969</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 14.11.1917</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>

        <ContainerWrap>
          <FamilyH2>u. 23.02.1930 Józef&nbsp;Gierczak ✝08.08.1996</FamilyH2>
          <FamilyH2>u. 08.12.1931 Marianna&nbsp;Ofiara ✝26.01.1987</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 19xx</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
      </Container>
    </>
  );
};

export default SignIn;
