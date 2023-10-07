import { Link, useNavigate } from "react-router-dom";
import "./Login/Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import swal from 'sweetalert';
import { FaEye, FaEyeSlash  } from 'react-icons/fa';



const Registration = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)
  const [showPassTwo, setShowPassTwo] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const checkbox = e.target.checkbox.checked;
    console.log(name, email, password, confirmPassword, checkbox);


     if(password !== confirmPassword){
      return swal("Signup failed", "Your password did not match", "error");
    }

    else if(password.length < 6){
      return swal("Signup failed", "Password must be 6 characters long", "error");
    }

   else if(!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
      return swal("Signup failed", "Password must contain at least one uppercase letter and one special character", "error");
    }

    else if(!checkbox){
      return swal("Signup failed", "You must agree to our terms and conditions", "error");
    }


    createUser(email, password) 
    .then(result => {
      const user = result.user;
      console.log(user);
      e.target.reset()
      swal("Signup", "You are successfully signed up", "success");
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
  }


  return (
    <div>
      <div>
        <div className="md:my-20 my-10   ">
          <div className="hero-content     ">
            <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100 ">
              <div className="relative mx-4 -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40 btn-grad">
                <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Signup
                </h3>
              </div>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input input-bordered "
                    required
                  /><span className="absolute top-13 right-4 bottom-4" onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash /> : <FaEye />}</span>
                  
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={showPassTwo ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="input input-bordered"
                    required
                  /><span className="absolute top-14 right-4 bottom-4 " onClick={() => setShowPassTwo(!showPassTwo)}>{showPassTwo ? <FaEyeSlash /> : <FaEye />}</span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="checkbox"
                    defaultValue
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                  >
                    Accept Our Terms & Conditions
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-grad ">Signup</button>
                </div>
              </form>
              <p className='text-center py-4 font-medium'>Already have an account? Please <Link className='text-primary font-bold underline hover:text-blue-900' to="/login">Signin</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
