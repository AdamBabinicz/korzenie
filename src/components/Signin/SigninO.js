import React from "react";
import { GiTreeRoots } from "react-icons/gi";
import { CgArrowBottomLeft } from "react-icons/cg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH2,
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
import img1 from "../../images/1.avif";

const SignInO = () => {
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
          <FamilyH2 to="/andrzej">Andrzej Ofiara</FamilyH2>
          <FamilyH2 to="/franciszka">
            u. 1876 Franciszka Szaruch (Saruch)
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 18xx</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/jozef">u. 1896 Józef Ofiara ✝17.06.1968</FamilyH2>
          <FamilyH2 to="/helena">u. 1905 Helena Sobień ✝06.09.1978</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 09.02.1926</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        {/* <ContainerWrap>
          <FamilyH2>Paweł Gierczak</FamilyH2>
          <FamilyH2>Katarzyna Czerwińska</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1887</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2>Jan Gierczak</FamilyH2>
          <FamilyH2>Agnieszka Baćmaga</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1917</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon> */}
      </Container>
    </>
  );
};

export default SignInO;
