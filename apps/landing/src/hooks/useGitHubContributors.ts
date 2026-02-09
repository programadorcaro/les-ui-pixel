import { useState, useEffect } from 'react';

const GITHUB_OWNER = 'programadorcaro';
const GITHUB_REPO = 'les-ui-pixel';

const MAINTAINER_LOGINS = new Set([
  'lucasmaiaesilva',
  'programadorcaro',
  'VictorSouza02',
]);
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
            (item: {
              login: string;
              avatar_url: string;
              contributions: number;
            }) => ({
              name: item.login,
              login: item.login,
              avatar: item.avatar_url,
              role: MAINTAINER_LOGINS.has(item.login)
                ? 'Maintainer'
                : 'Contributor',
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
