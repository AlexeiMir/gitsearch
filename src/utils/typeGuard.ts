import { GithubUser } from 'types/user';
export const isGithubUser = (user: any): user is GithubUser => 'login' in user;