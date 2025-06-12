import React from 'react';
import { UserListProps } from 'types/github'
import RepoList from './RepoList';

const UserList: React.FC<UserListProps> = ({ users, userRepos, loadingUser, toggleUserRepos }) => {
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div key={user.id} className="border rounded">
          <button
            onClick={() => toggleUserRepos(user.login)}
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
          >
            {user.login}
          </button>
          {loadingUser === user.login && <div className="px-4 py-2 text-sm">Loading...</div>}
          {userRepos[user.login] && (
            <div className="px-4 py-2">
              {userRepos[user.login].length === 0 ? (
                <div className="text-sm text-gray-500">No repositories found.</div>
              ) : (
                <RepoList repos={userRepos[user.login]} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
