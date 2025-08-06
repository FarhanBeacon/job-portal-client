import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile, signOutUser, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { username, email, password };

    setError("");
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError([
        "Password must be at least 8 characters long and  one uppercase letter and one digit (number)",
      ]);
      return;
    }

    // Creating A New User On Firebase
    createUser(email, password)
      .then(() => {
        updateUserProfile(user).then(() => {
          signOutUser().then(() => {
            navigate("/signIn");
          });
        });
      })
      .catch((e) => {
        console.error(e);
        setError("Registration failed. Please try again.");
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
            animationData={registerLottie}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <h1 className="text-4xl font-semibold text-center mb-2">
                Register!
              </h1>
              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Username"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
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
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
