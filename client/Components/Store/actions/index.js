import { HANDLE_SIGNUP_FORM_CHANGE } from "../types/index";

export const handleSignUpForm = (name, value, cb) => {
  const action = cb({
    type: HANDLE_SIGNUP_FORM_CHANGE,
    payload: { name, value }
  });
  return action;
};
