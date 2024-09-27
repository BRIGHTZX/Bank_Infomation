import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setErrorMessage(null);
      const res = await axios.post("/api/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="h-screen w-full flex">
      {/* Left */}
      <main className="w-1/2 flex justify-center items-center">
        <section className="w-3/5">
          <form onSubmit={handleSubmit} className="p-10">
            <div>
              <h1 className="text-5xl font-bold mb-4">Register</h1>
              <p className="text-gray-500 font-semibold">
                How do i got started lorem ipsum clear at?{" "}
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-col">
                <label htmlFor="" className="text-xl font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="border border-gray-300 w-full h-10 rounded-full mt-4"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-xl font-semibold mt-4">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="border border-gray-300 w-full h-10 rounded-full mt-4"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="" className="text-xl font-semibold mt-4">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="border border-gray-300 w-full h-10 rounded-full mt-4"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="bg-blue-700 py-2 text-center rounded-full mt-10">
                <button type="submit" className="text-white font-bold text-xl">
                  Sign Up
                </button>
              </div>
              <div className="mt-4 text-right font-semibold">
                <p>
                  Are You Have any Account ?{" "}
                  <span className="text-blue-700">
                    <Link to={`/`}>Log In</Link>
                  </span>
                </p>
              </div>
              <div>{errorMessage}</div>
            </div>
          </form>
        </section>
      </main>
      {/* Right */}
      <section className="w-1/2">
        <img
          src="https://wallup.net/wp-content/uploads/2019/09/317501-nissan-skyline-r34-gt-r-car-hd-wallpaper-1920x1080-8791.jpg"
          alt=""
          className="w-full h-screen object-cover object-left"
        />
      </section>
    </div>
  );
}

export default Register;
