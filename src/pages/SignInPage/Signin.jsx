import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import LoginLottie from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const Signin = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signInUser, signInWithGoogle, setUser, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    // Sign In With Email And Password
    signInUser(email, password)
      .then((result) => {
        // navigate(from, { replace: true });
        console.log("Login successful:", result.user.email);
        const user = { email: email }
        axios.post('http://localhost:5000/jwt', user)
        .then((res)=> {
          console.log(res.data);
        })
      })
      .catch((e) => {
        console.error("Login failed:", e);
        setError("Invalid email or password");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Sign In With Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError("Invalid email or password");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen items-start md:items-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={LoginLottie}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <h1 className="text-4xl font-semibold text-center mb-2">
                Sign in!
              </h1>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <>
                  {showPass ? (
                    <FaEyeSlash
                      onClick={() => setShowPass(false)}
                      className="absolute z-10 text-lg right-4 md:right-6 top-3 cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(true)}
                      className="absolute z-10 text-lg right-4 md:right-6 top-3 cursor-pointer"
                    />
                  )}
                </>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <button className="btn btn-neutral mt-4">Sign in</button>
            </form>
          </div>
          <div className="divider mx-[8%]">OR</div>
          <div className="card-body">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-neutral dark:text-white"
            >
              <FaGoogle className="text-lg mr-2" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
