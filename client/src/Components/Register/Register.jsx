import React, { use } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Title from "../Title";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const axios = useAxios();
  const { createUser, signInWithGoogle } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const photoUrl = target.photoUrl.value;

    createUser(email, password, name)
      .then((setUser) => {
        const users = setUser.user;

        const newUser = {
          name: users.displayName || name,
          email: users.email,
          photoUrl: users.photoURL || photoUrl,
        };

        axios.post("/users", newUser)
        .then((data) => {
          if (data.data.insertedId) {
            toast.success("User Registered Successfully");
          } else if (data.message === "user already exists") {
            toast.error("User already exists!");
          }

           target.reset();
        })
        .catch((error) => {
          toast.error(error.message)
        })
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        // console.log(res.user);

        const newUser = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
        };

        axios
          .post("/users", newUser)
          .then((userGetData) => {
            if (userGetData.data.insertedId) {
              toast.success("User SignUp Successfully with Google");
            } else if (userGetData.data.message === "User already exists") {
              toast.error("User already exists");
            }
          })

          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="register py-8">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-4">
          <Title title1={<>Register</>} />
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Photo url</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input"
                  placeholder="Photo url"
                  required
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                {/* forgot password */}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Register Now</button>
              </fieldset>
            </form>

            {/* Google */}
            <button
              className="btn bg-white text-black border-[#e5e5e5]"
              onClick={handleGoogleSignIn}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Signup with Google
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Register;
