import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { SignInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    displayName: "anonymous",
    email: "anonymous@example.com",
    photoURL: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81",
  })
  


  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);


        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    SignInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
       

        

        e.target.reset();

        swal("Signin", "You are successfully signed in", "success");
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
        swal("Signin failed", "Invalid email or password", "error");
      });
  };

  return (
    <div>
      <div className=" my-10 md:my-20  ">
        <div className="hero-content  ">
          <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100 ">
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40 btn-grad">
              <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                Signin
              </h3>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-grad">Signin</button>
              </div>
            </form>
            <p className="text-center py-4 font-medium">
              Don't have an account? Please{" "}
              <Link
                className="text-primary font-bold underline hover:text-blue-900"
                to="/registration"
              >
                Signup
              </Link>
            </p>

            <div className="mx-auto md:flex md:justify-evenly mb-6">
            <p><button onClick={handleGoogleSignIn} className="btn btn-grad ">Continue With Google</button></p>

            <p><button onClick={handleGithubSignIn} className="btn btn-grad">Continue With Github</button></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
