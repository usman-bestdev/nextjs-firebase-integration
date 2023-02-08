import SignUp from "../components/signUp";
import AuthPage from "../authentication/auth-page-wrappers/AuthPage";

function SignUpPage() {
  return (
    <>
      <AuthPage>
        <SignUp />
      </AuthPage>
    </>
  );
}

export default SignUpPage;
