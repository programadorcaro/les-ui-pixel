import { useState, useEffect } from 'react';

const GITHUB_OWNER = 'programadorcaro';
const GITHUB_REPO = 'les-ui-pixel';

/** Ativar para usar 4 contribuidores mockados (apenas testes). */
const USE_MOCK_CONTRIBUTORS = true;

const MOCK_CONTRIBUTORS: GitHubContributor[] = [
  {
    name: 'Lucas Maia e Silva',
    login: 'programadorcaro',
    avatar: 'https://avatars.githubusercontent.com/u/8356935?v=4',
    role: 'Maintainer',
    contributions: 42,
  },
  {
    name: 'Víctor Souza',
    login: 'victorsouza',
    avatar: 'https://avatars.githubusercontent.com/u/102697200?v=4',
    role: 'Contributor',
    contributions: 12,
  },
  {
    name: 'Dev Tester',
    login: 'dev-tester',
    avatar: 'https://avatars.githubusercontent.com/u/9919?v=4',
    role: 'Contributor',
    contributions: 3,
  },
  {
    name: 'Ana Pixel',
    login: 'ana-pixel',
    avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
    role: 'Contributor',
    contributions: 7,
  },
];

export interface GitHubContributor {
  name: string;
  login: string;
  avatar: string;
  role: string;
  contributions: number;
}

export function useGitHubContributors() {
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContributors() {
      if (USE_MOCK_CONTRIBUTORS) {
        await new Promise((r) => setTimeout(r, 600));
        setContributors(MOCK_CONTRIBUTORS);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors?per_page=10`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }

        const data = await response.json();

        const isBot = (item: { type?: string; login: string }) =>
          item.type === 'Bot' || item.login.endsWith('[bot]');

        const list: GitHubContributor[] = data
          .filter((item: { type?: string; login: string }) => !isBot(item))
          .map(
            (item: { login: string; avatar_url: string; contributions: number }, index: number) => ({
              name: item.login,
              login: item.login,
              avatar: item.avatar_url,
              role: index === 0 ? 'Maintainer' : 'Contributor',
              contributions: item.contributions,
            })
          );

        setContributors(list);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  return { contributors, loading, error };
}
