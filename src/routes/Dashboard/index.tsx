import React, { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import api from "../../serices/api";

import LogoGit from "../../assets/logo-git.svg";
import {
  Title,
  Container,
  Form,
  TitleForm,
  Description,
  ContainerItem,
  ContainerText,
  Error,
} from "./style";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@githubExplorer:repositories"
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "@githubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!inputValue) {
      setInputError("Digite o nome do repositório");
      return;
    }

    try {
      const response = await api.get(`/repos/${inputValue}`);
      console.log(response);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputValue("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca do repositório");
    }
  }

  return (
    <Container>
      <img src={LogoGit} alt="Git" />
      <Title>Explore repositórios no Github.</Title>

      {inputError && <Error>{inputError}</Error>}
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite aqui o seu repositório"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Pesquisar</button>
      </Form>

      {repositories.map((repository) => (
        <ContainerItem key={repository.full_name}>
          <Link to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <ContainerText>
              <TitleForm>{repository.full_name}</TitleForm>
              <Description>{repository.description}</Description>
            </ContainerText>
            <FiChevronRight size={20} />
          </Link>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default Dashboard;
