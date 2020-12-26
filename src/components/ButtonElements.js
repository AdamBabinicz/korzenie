import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ccc" : "#01606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "rgb(245, 243, 243);")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  &:hover {
    background: ${({ primary }) => (primary ? "#333" : "#ccc")};
    color: ${({ dark }) => (dark ? "rgb(245, 243, 243);" : "#ccc")};
  }
`;
