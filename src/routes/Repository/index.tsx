import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import api from "../../serices/api";

import LogoHeader from "../../assets/logo-git.svg";

import {
  Header,
  ProfileRepository,
  Profile,
  Stats,
  Item,
  RepoDetail,
  Loading
} from "./style";

interface RepositoryParams {
  repos: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  description: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repos}`),
        api.get(`repos/${params.repos}/issues`),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repos]);
  return (
    <>
      <Header>
        <img src={LogoHeader} alt="Codes" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <ProfileRepository>
          <Profile>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <h5>{repository.description}</h5>
            </div>
          </Profile>

          <Stats>
            <Item>
              <h3>{repository.stargazers_count}</h3>
              <p>Stars</p>
            </Item>
            <Item>
              <h3>{repository.forks_count}</h3>
              <p>Forks</p>
            </Item>
            <Item>
              <h3>{repository.open_issues_count}</h3>
              <p>Issues abertas</p>
            </Item>
          </Stats>
        </ProfileRepository>
      ): (
        <Loading>

        </Loading>
      )}

      {issues.map((issue) => (
        <RepoDetail key={issue.id} href={issue.html_url} target="_blank">
          <div>
            <h3>{issue.title}</h3>
            <p>{issue.user.login}</p>
          </div>
          <FiChevronRight size={25} />
        </RepoDetail>
      ))}
    </>
  );
};

export default Repository;
