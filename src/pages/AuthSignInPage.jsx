import React, { useContext, useRef, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
// import { Navigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const AuthSignInPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  const currentLocation = useLocation();
  const intendedLocation = currentLocation.state || "/";
  // console.log(intendedLocation);
  const navigate = useNavigate();

  const {
    setLoggedInUser,
    doSignInWithEmailAndPassword,
    doSendPasswordResetEmail,
    doSignOut,
    setPageIsLoading,
  } = useContext(AuthContext);

  // const [emailFieldInput, setEmailFieldInput] = useState(""); // using controlled component approach to get email field's value
  const refEmailInputField = useRef(null); // using reference hook, an alternet approach to get email field's value

  // const { loggedInUser } = useContext(AuthContext);
  // // console.log(loggedInUser);
  // if (loggedInUser) {
  //   return <Navigate to="/" replace />;
  //   // this code is no longer ncessary as we used navigate(intendedLocation) after sign in completes
  // }

  const handleEmailSignIn = (e) => {
    e.preventDefault();

    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log({ vMail, vPass });

    doSignInWithEmailAndPassword(vMail, vPass)
      .then((userCredential) => {
        // e.target.reset();
        // console.log(userCredential);

        const user = userCredential.user;
        // console.log(user);

        if (!user.emailVerified) {
          toast.info(
            `Please confirm verication email sent to ${user.email} first.`
          );

          // force sign out to cancel the progress made so far
          doSignOut();
          setLoggedInUser(null);
          return;
        }

        toast.success(`User ${user.email} logged in successfully.`);
        setLoggedInUser(user);
        e.target.reset();

        console.log(intendedLocation);
        navigate(intendedLocation);
      })
      .catch((error) => {
        toast.error(`Login attempt failed! ${error.message}.`);
        setErrorDetails(error.code); //alternate approach
      });
    setPageIsLoading(false);
  };

  const handleUserResetPassword = () => {
    // console.log(emailFieldInput); // to get email value using controlled comnent
    // console.log(refEmailInputField); // alternet approach to get the email field's value
    const email = refEmailInputField.current.value;

    // sendPasswordResetEmail(fbaseAuth, email) //went to context
    doSendPasswordResetEmail(email)
      .then(() => {
        toast.success(`Password reset email sent to ${email}.`);
      })
      .catch((err) => {
        toast.error(
          `Error sending password rest email! ${err.code} - ${err.message}`
        );
      });
  };

  return (
    <div className="w-11/12 flex justify-center items-center min-h-[calc(100vh-236px)]">
      <form onSubmit={handleEmailSignIn}>
        <h2 className="font-semibold text-2xl text-center text-accent py-4">
          Login Your Account
        </h2>
        <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4 shadow-lg">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            required
            name="fmail"
            // value={emailFieldInput}
            // onChange={(e) => setEmailFieldInput(e.target.value)}
            ref={refEmailInputField}
          />

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
              name="fpass"
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="top-8 right-2 z-50 absolute cursor-pointer"
            >
              {passwordVisible ? <LuEye /> : <LuEyeClosed />}
            </span>
          </div>

          <div>
            <button
              className="cursor-pointer hover:underline"
              onClick={handleUserResetPassword}
              type="button"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          {/* showing error on form */}
          {errorDetails && (
            <p className="bg-orange-300 rounded text-red-800 mt-4 p-2">
              {errorDetails}
            </p>
          )}
        </fieldset>

        <p className="text-center my-6 text-primary">
          Don't have any account?{" "}
          <Link to="/auth/register" className="text-secondary">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthSignInPage;
