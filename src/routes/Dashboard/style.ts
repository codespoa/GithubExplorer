import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  font-weight: bold;
  padding-top: 120px;
  max-width: 433px;
  margin-bottom: 75px;
`;

export const Container = styled.div``;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 715px;
  margin-bottom: 75px;

  input {
    flex: 1;
    height: 72px;
    padding: 0 30px;
    font-size: 20px;
    color: #a8a8b3;
    border-radius: 5px 0px 0px 5px;
    border: 2px solid #ffffff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #f64b4b;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    width: 210px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    transition: 0.2s ease-in;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const ContainerItem = styled.div`
  width: 100%;
  max-width: 715px;

  a {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    transition: linear 0.2s;
    text-decoration: none;
    height: 112px;

    &:hover {
      transform: translateX(10px);
    }
  }

  & + div {
    margin-top: 20px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 25px;
  }

  svg {
    margin-left: auto;
    color: #c9c9d4;
  }
`;

export const TitleForm = styled.h2`
  color: #3d3d4d;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

export const Description = styled.p`
  color: #a8a8b3;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.span`
  color: #f64b4b;
  display: block;
  margin-bottom: 8px;
`;
