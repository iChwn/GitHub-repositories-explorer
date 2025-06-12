export interface GitHubUser {
  id: number;
  login: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string;
}

export interface UserListProps {
  users: GitHubUser[];
  userRepos: Record<string, GitHubRepo[]>;
  loadingUser: string | null;
  toggleUserRepos: (username: string) => void;
}


export interface RepoListProps {
  repos: GitHubRepo[];
}