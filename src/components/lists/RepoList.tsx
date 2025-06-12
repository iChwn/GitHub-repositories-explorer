import React from 'react';
import { RepoListProps } from 'types/github'


const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <ul className="space-y-2">
      {repos.map((repo) => (
        <li key={repo.id} className="border-b pb-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-medium"
          >
            {repo.name}
          </a>
          <div className="text-sm text-gray-600">⭐ {repo.stargazers_count}</div>
          {repo.description && (
            <div className="text-sm text-gray-800 italic">{repo.description}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
