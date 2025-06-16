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
import img from "../../images/jedl.avif";
import img2 from "../../images/6.avif";

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
        <p className="p">
          <strong>Ludwików</strong> - już w latach 1442–1457 właścicielami
          miejscowości okolicznych (np. Jedlińska) byli Mikołaj i Zbigniew
          Czajkowie herbu Dębno, synowie Zawiszy z Oleśnicy.
        </p>
        <p className="p">
          W XVI wieku tereny należały do rodu Jedlińskich herbu Nabram, gdzie w
          1530 r. napisano prawo lokacji Jedlińska (miasta, dzisiaj z powrotem
          wsi) przez króla Zygmunta I Starego.
        </p>
        <br />
        <img src={img} alt="..." className="wies" />
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
        <p className="p">
          <strong>Gulinek</strong> k. Zakrzewa - prywatna wieś szlachecka,
          położona była w&nbsp;drugiej połowie XVI wieku w&nbsp;powiecie
          radomskim województwa sandomierskiego.
        </p>
        <br />
        <img src={img2} alt="..." className="wies" />
        <ContainerWrap>
          <FamilyH2 to="/jozef">u. 1896 Józef Ofiara ✝17.06.1968</FamilyH2>
          <FamilyH2 to="/helena">
            u. 09.01.1905 Helena Sobień ✝06.09.1978
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 09.02.1926</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
      </Container>
    </>
  );
};

export default SignInO;
