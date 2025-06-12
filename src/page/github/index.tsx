import { UserList } from 'components';
import { useGithub } from 'utility/hooks/apiHooks/useGithub';

export default function GitHubUserSearch() {
  const {getListUser, isGetUserLoading, query, setQuery, users, handleKeyDown,
    userRepos, selectedUser, toggleUserRepos
  } = useGithub()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <div className="flex md:gap-2 gap-1 mb-4 md:flex-row flex-col">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search GitHub username..."
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={() => getListUser(query)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {isGetUserLoading && <div className="mb-4 text-sm text-gray-500">Searching users...</div>}

      <UserList
        users={users}
        userRepos={userRepos}
        loadingUser={selectedUser}
        toggleUserRepos={toggleUserRepos}
      />
    </div>
  );
}
