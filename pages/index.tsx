import type { NextPage } from "next";
import SignIn from "../components/SignIn";
import AuthPage from "../authentication/auth-page-wrappers/AuthPage";

const Home: NextPage = () => {
  return (
    <>
      <AuthPage>
        <SignIn />
      </AuthPage>
    </>
  );
};

export default Home;
