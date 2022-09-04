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
        <p>
          Jaszowice - prywatna wieś szlachecka w drugiej połowie XVI wieku w
          powiecie radomskim województwa sandomierskiego.
        </p>
        <br />
        <ContainerWrap>
          <FamilyH2 to="/ambrozy">Ambroży&nbsp;Gierczak (Gerczak)</FamilyH2>
          <FamilyH2>Kunegunda&nbsp;Kania (Koniak)</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1820 ?</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/karol">
            u. 1828 Karol&nbsp;Gierczak (Gerczak) ✝1903
          </FamilyH2>
          <FamilyH2>u. 19.10.1831 Tekla&nbsp;Kozyra (Kozera) ✝1909</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 23.11.1857</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <p>
          Gulinek k. Zakrzewa - prywatna wieś szlachecka Zakrzów, położona była
          w drugiej połowie XVI wieku w powiecie radomskim województwa
          sandomierskiego.
        </p>
        <br />
        <ContainerWrap>
          <FamilyH2 to="/pawel">
            u. 11.01.1867 Paweł&nbsp;Gierczak (Gerczak) ✝29.07.1935
          </FamilyH2>
          <FamilyH2>Katarzyna&nbsp;Czerwińska</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1887</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/jan">u. 18.06.1891 Jan&nbsp;Gierczak ✝1955</FamilyH2>
          <FamilyH2>u. 13.04.1894 Agnieszka&nbsp;Baćmaga ✝08.11.1969</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 14.11.1917</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/józef">
            u. 23.02.1930 Józef&nbsp;Gierczak ✝08.08.1996
          </FamilyH2>
          <FamilyH2>u. 08.12.1931 Marianna&nbsp;Ofiara ✝26.01.1987</FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 26.11.1952</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
      </Container>
    </>
  );
};

export default SignIn;
