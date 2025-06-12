import apiList from "constant/apiUrl";
import { startRequest } from "utility/requestHelper/requestHelper";

export const getUserLists = async (username:string) => {
  const apiData = {
    url: apiList.getGithubUsers(username),
    method: "GET",
  };

  return startRequest(apiData);
};

export const getUserRepos = async (username:string) => {
  const apiData = {
    url: apiList.getGithubUserRepos(username),
    method: "GET",
  };

  return startRequest(apiData);
};