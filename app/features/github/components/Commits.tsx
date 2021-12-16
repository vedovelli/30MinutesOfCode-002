import { Types } from "..";

export interface CommitsProps {
  commits: Types.Commits.Commit[];
  user: Types.User;
}

export function Commits({ commits, user }: CommitsProps) {
  return (
    <div className="pl-6 lg:w-80">
      <div className="pt-6 pb-2">
        <h2 className="text-sm font-semibold">Activity</h2>
      </div>
      <div>
        <ul role="list" className="divide-y divide-gray-200">
          {commits.map((commit) => (
            <li key={commit.sha} className="py-4">
              <a href={commit.html_url} target="_blank">
                <div className="flex space-x-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="text-sm font-medium">{user.login}</h3>
                    <p className="text-sm text-gray-500">{commit.message}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="py-4 text-sm border-t border-gray-200">
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:text-indigo-900"
          >
            View all activity <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
