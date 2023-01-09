import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // state for storing the state of the page
  const [loginPage, setLoginPage] = useState(1);

  // for moving to the next section
  const nextPage = () => {
    let temp = loginPage;
    temp++;
    setLoginPage(temp);
  };

  // for moving to previous section
  const prevPage = () => {
    let temp = loginPage;
    temp--;
    setLoginPage(temp);
  };

  return (
    <LoginContext.Provider value={{ loginPage, nextPage, prevPage }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
