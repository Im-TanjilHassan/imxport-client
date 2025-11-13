import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";

const Register = () => {
    const { googleLogin, createUser, updateUserProfile } =
      useContext(AuthContext);
      const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleLogin = () => {
      googleLogin()
        .then(() => {
          navigate(from, { replace: true });
        })
        .then((err) => {
          const errorCode = err.code.split("/")[1];
        Swal.fire({
                  icon: "error",
                  title: "Google Authentication Error",
                  text: errorCode,
                });
        });
    };

      const handleSignup = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.url.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
          setError(
            "Password must have at least one uppercase, one lowercase, and be 6+ characters long."
          );
          return;
        }

        // If valid
        setError("");
        createUser(email, password)
          .then(() => {
            updateUserProfile(name, photoURL)
              .then((result) => {
                console.log("user update successfully", result);
              })
              .then((err) => {
                const errorCode = err.code.split("/")[1];
                Swal.fire({
                  icon: "error",
                  title: "User Authentication Error",
                  text: errorCode,
                });
              });
            navigate(from, { replace: true });
          })
          .then((err) => {
            const errorCode = err.code.split("/")[1];
            Swal.fire({
              icon: "error",
              title: "User Authentication Error",
              text: errorCode,
            }); 
          });

        e.target.reset();
    };
    
    return (
      <div className="py-2 flex items-center justify-center bg-base-100">
        <div className="flex w-full max-w-5xl bg-base-200 rounded-2xl overflow-hidden shadow-2xl">
          {/* left Side - Dark Panel */}
          <div className="md:flex w-1/2 bg-linear-to-br from-primary to-secondary text-white flex-col justify-center items-center p-10 relative">
            <div
              data-aos="fade-up"
              className="relative z-10 text-center space-y-4"
            >
              <h2 className="text-3xl font-bold">Welcome to ImXport</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                At ImXport, we bring the world closer by bridging the gap
                between exporters and importers. Our platform ensures that every
                transaction — from raw materials to finished goods — happens
                smoothly, transparently, and securely across international
                borders.
              </p>
              <p className="text-gray-400 text-xs">
                More than 17k people joined — it’s your turn!
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="mt-8 relative z-10 bg-secondary rounded-xl p-5 w-72 text-center"
            >
              <p className="text-gray-200 text-sm mb-3">
                Get your right job and apply now — start your journey easily!
              </p>
            </div>
          </div>
          {/* right Side - Sign In Form */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-3xl font-semibold mt-6 text-secondary">
                Create Your Account
              </h2>
            </div>
            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-accent">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-accent">
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="must be 6 character at lest"
                  className="input input-bordered w-full mt-1pr-12"
                  autoComplete="on"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-11 transform -translate-y-1/2 text-lg text-primary"
                >
                  {showPass ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

              <button className="btn btn-secondary hover:btn-primary text-white w-full mt-3">
                Create Account
              </button>
            </form>

            {/* Sign up + Social */}
            <div className="text-center text-sm mt-4 text-gray-600">
              Already Have An Account?{" "}
              <Link
                to="/login"
                className="text-secondary font-medium hover:underline"
              >
                Log in
              </Link>
            </div>

            <div className="divider text-gray-400 text-sm">OR</div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-secondary font-semibold"
              >
                <FcGoogle className="text-lg" />
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;