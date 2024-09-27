import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen w-full flex">
      {/* Left */}
      <main className="w-1/2 flex justify-center items-center">
        <section className="w-3/5">
          <div className="p-10">
            <div>
              <h1 className="text-5xl font-bold mb-4">Log In</h1>
              <p className="text-gray-500 font-semibold">
                How do i got started lorem ipsum clear at?{" "}
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-col">
                <label htmlFor="" className="text-xl font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  className="border border-gray-300 w-full h-10 rounded-full mt-4"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="" className="text-xl font-smibold">
                  Password
                </label>
                <input
                  type="text"
                  className="border border-gray-300 w-full h-10 rounded-full mt-4"
                />
              </div>
              <div className="bg-blue-700 py-2 text-center rounded-full mt-10">
                <button className="text-white font-bold text-xl">Login</button>
              </div>
              <div className="mt-4 text-right font-semibold">
                <p>
                  Are You Have any Account ?{" "}
                  <span className="text-blue-700">
                    <Link to={`/register`}>Register</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
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

export default Login;
