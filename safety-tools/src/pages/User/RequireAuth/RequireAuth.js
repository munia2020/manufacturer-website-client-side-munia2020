import React from 'react';
import './RequiredAuth.css';
import Loading from "../../SharedComponents/Loading/Loading";
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../../firebase.init";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="req-auth-container">
        <h3>Oops! Your Email is not verified!</h3>
        <h5> Please Verify your email...</h5>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast(
              "Email send. please check the your inbox. If you don't find it, check the spam."
            );
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;