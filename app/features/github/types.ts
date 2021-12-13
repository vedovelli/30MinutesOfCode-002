export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface LoaderData {
  user: User;
}
