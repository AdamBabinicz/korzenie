import styled from "styled-components";

export const InfoContainer = styled.div`
  color: rgb(245, 243, 243);
  background: ${({ lightBg }) => (lightBg ? "#ccc" : "rgba(0, 0, 0, 0.342)")};
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 6px 24px;
  align-items: center;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#ccc" : "rgb(245, 243, 243)")};
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  @media screen and (max-width: 640px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.7rem;
  line-height: 1.3;
  color: ${({ darkText }) =>
    darkText ? " rgb(82, 80, 80)" : "rgb(245, 243, 243)"};
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding-top: 1rem;
`;

export const ImgEnd = styled.img`
  width: 100%;
  max-width: 330px;
  height: 500px;
  margin-top: 2rem;
  object-fit: cover;

  @media screen and (max-width: 640px) {
    height: 400px;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
