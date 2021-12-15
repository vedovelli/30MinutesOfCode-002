import { Menu } from "@headlessui/react";
import { ChevronDownIcon, SortAscendingIcon } from "@heroicons/react/solid";
import { classNames } from "~/util";
import { Repository } from "./Repository";

import { Types } from "..";
import { Layout } from "../Layouts/Layout";

export interface RepositoriesProps {
  repos: Types.Repositories.Repo[];
  user: Types.User;
}

export function Repositories({ repos, user }: RepositoriesProps) {
  return (
    <Layout user={user} repos={repos}>
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
          <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium">Projects</h1>
            <Menu as="div" className="relative">
              <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <SortAscendingIcon
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Sort
                <ChevronDownIcon
                  className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Name
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Date modified
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Date created
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <ul
          role="list"
          className="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
        >
          {repos.map((repo) => (
            <Repository repo={repo} key={repo.id} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
