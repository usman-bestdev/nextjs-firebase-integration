import SecurePage from "../authentication/auth-page-wrappers/SecurePage";
import { useAuth } from "../authentication";

const Home = () => {
  const { userSignOut }: any = useAuth();
  return (
    <>
      <SecurePage>
        <p>You are logged in.... </p>

        <button
          onClick={() => {
            userSignOut();
          }}
        >
          Sign out
        </button>
      </SecurePage>
    </>
  );
};

export default Home;
