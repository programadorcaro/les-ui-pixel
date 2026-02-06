import { useState, useEffect } from 'react';

const GITHUB_OWNER = 'programadorcaro';
const GITHUB_REPO = 'les-ui-pixel';

export interface GitHubStats {
  stars: number;
  forks: number;
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }

        const data = await response.json();
        setStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading };
}

export function formatStarCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}
