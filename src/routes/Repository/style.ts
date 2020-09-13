import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
  }
`;

export const ProfileRepository = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 35px;
  }

  h2 {
    color: #3d3d4d;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }

  h5 {
    font-size: 20px;
    line-height: 23px;
    color: #737380;
    font-weight: normal;
  }
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const Item = styled.li`
  & + li {
    margin-left: 80px;
  }
  h3 {
    color: #3d3d4d;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }

  p {
    color: #6c6c80;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
  }
`;

export const RepoDetail = styled.a`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  min-height: 112px;
  max-width: 960px;
  padding: 25px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;

  &:hover {
    transform: translateX(10px);
  }
  h3 {
    color: #3d3d4d;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  p {
    color: #a8a8b3;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }

  svg {
    color: #c9c9d4;
    margin-left: auto;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #3d3d4d;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
`
