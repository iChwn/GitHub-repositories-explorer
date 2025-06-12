import { useEffect, useState } from "react"
import { useCustomMutationReactQuery } from "../setupHooks";
import { getUserLists, getUserRepos } from "utility/apiProcess/githubApi";
import { GitHubUser, GitHubRepo } from "types/github";
import { toast } from "react-toastify";

export const useGithub = () => {
  // get user list
  const [query, setQuery] = useState<string>('');
  const [users, setUsers] = useState<GitHubUser[]>([]);

  const { isLoading: isGetUserLoading, decryptedData: dataUser, startFetch: getListUser} = useCustomMutationReactQuery(
    getUserLists,
    {
      onError: e => toast.error(`Error fetching users`)
    }
  );

  useEffect(() => {
    if (dataUser === null) return;
    setUsers(dataUser.data.items);
  }, [dataUser]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getListUser(query);
    }
  };

  // get user repos
  const [userRepos, setUserRepos] = useState<Record<string, GitHubRepo[]>>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const { isLoading: isGetUserRepo, decryptedData: dataRepos, startFetch: getUserRepo} = useCustomMutationReactQuery(
    getUserRepos,
    {
      onError: e => toast.error(`Error fetching users`)
    }
  );

  useEffect(() => {
    if (dataUser === null) return;
    setUserRepos((prev) => ({ ...prev, [selectedUser]: dataRepos.data }));
    setSelectedUser(null)
  }, [dataRepos]);

  const toggleUserRepos = async (username: string): Promise<void> => {
    if (userRepos[username]) {
      setUserRepos((prev) => {
        const updated = { ...prev };
        delete updated[username];
        return updated;
      });
    } else {
      setSelectedUser(username);
      getUserRepo(username);
    }
  };

  return {
    getListUser,
    isGetUserLoading,
    query,
    setQuery,
    users,
    handleKeyDown,

    userRepos,
    selectedUser,
    toggleUserRepos
  }
}