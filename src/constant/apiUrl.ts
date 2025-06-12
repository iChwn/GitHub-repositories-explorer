const apiList = {
  getGithubUsers: (username:string) => `/search/users?q=${username}&per_page=5`,
  getGithubUserRepos: (username:string) => `/users/${username}/repos`,
};

export default apiList;
