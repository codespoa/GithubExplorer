import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import LogoHeader from "../../assets/logo-git.svg";

import { Header } from "./style";

interface RepositoryParams {
  repos: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <img src={LogoHeader} alt="Codes" />

      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
