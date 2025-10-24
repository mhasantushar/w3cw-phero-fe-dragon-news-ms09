import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const AuthSignOnPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    loggedInUser,
    setLoggedInUser,
    doCreateUserWithEmailAndPassword,
    doUpdateProfile,
    doSendEmailVerification,
    doSignOut,
  } = useContext(AuthContext);

  const handleUserCreation = (e) => {
    e.preventDefault();
    // console.log (e.target);

    const vName = e.target.fname?.value || "";
    const vPhoto = e.target.fpurl?.value || "";
    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log ({vName, vMail, vPass, vPhoto});

    if (vPass.length < 6) {
      toast.error("Password should be at least 6 characters.");
      return;
    }

    const regExpression =
      /^(?:(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])| (?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])).{8,}$/;
    if (!regExpression.test(vPass)) {
      toast.error(
        "Password should contain any three of these patterns: uppercase, lowercase, digits, and symbols."
      );
      return;
    }

    // Creating user account
    doCreateUserWithEmailAndPassword(vMail, vPass)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Account created with email ${user.email}`);
        setLoggedInUser(user);
        e.target.reset();
        console.log(loggedInUser);

        // user account creatd, so updating user's name and photourl
        doUpdateProfile(vName, vPhoto)
          .then(() => {
            // the builtin fuction wil update firebase db, so came up with th following line that updates the context..
            setLoggedInUser({
              ...loggedInUser,
              displayName: vName,
              photoURL: vPhoto,
            });
            console.log(loggedInUser);
          })
          .catch((err) => {
            toast.warn(
              `Account created, but additional info not updated! ${err.message}.`
            );
          });
        // updating user name and phot url done

        // now, sending a verification email..
        doSendEmailVerification()
          .then(() => {
            // const email = fbaseAuth.currentUser.email;
            toast.info(`Verification email sent to ${vMail}`);

            // forcing sign out as the process seems to auto signs in
            doSignOut().then(() => {
              setLoggedInUser(null);
              navigate("/auth/login");
            });
          })
          .catch((err) => {
            toast.warn(
              `Account created, but failed sending verification email! ${err.message}.`
            );
            // forcing sign out as the process seems to auto signs in
            doSignOut().then(() => {
              setLoggedInUser(null);
            });
          });
        // sending verification email done
      })

      .catch((error) => {
        toast.error(`User account wasn't created! ${error.message}`);
        setLoggedInUser(null);
      });
  };

  return (
    <div className="w-11/12 flex justify-center items-center min-h-[calc(100vh-236px)]">
      <form onSubmit={handleUserCreation}>
        <h2 className="font-semibold text-2xl text-center text-accent py-4">
          Register Your Account
        </h2>
        <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4 shadow-lg">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            required
            name="fname"
          />

          <label className="label">Photo URL</label>
          <input
            type="url"
            className="input"
            placeholder="Photo URL"
            required
            name="fpurl"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            required
            name="fmail"
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

          <button type="submit" className="btn btn-neutral mt-4">
            Create Account
          </button>
        </fieldset>
        <p className="text-center my-6 text-primary">
          Already have any account?{" "}
          <Link to="/auth/login" className="text-secondary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthSignOnPage;
