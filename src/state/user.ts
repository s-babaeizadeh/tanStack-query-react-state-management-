import { createGlobalState } from ".";

type UserState = {
  name: string;
  isSignedIn: boolean;
};

export const useUserState = createGlobalState<UserState>("user", {
  name: "Using TanStack Query as state management in React App",
  isSignedIn: true,
});
