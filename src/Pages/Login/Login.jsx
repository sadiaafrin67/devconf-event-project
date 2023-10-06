import './Login.css';

const Login = () => {
    return (

<div>

<div className=" my-10 md:my-20  ">

  <div className="hero-content  ">

 


    <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100 ">
    <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40 btn-grad">
    <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Login
    </h3>
  </div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"         placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-grad">Login</button>
        </div>
      </form>
    </div>


  </div>
</div>




</div>



    );
};

export default Login;