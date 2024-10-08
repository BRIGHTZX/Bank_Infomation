import { Link } from "react-router-dom";
import axios from "axios";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

const schema = z.object({
  email: z.string().email({ message: "Email must be example@example.com" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await axios.post("/api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });

      reset();
    } catch (error) {
      setError("root", {
        message: error.response?.data?.message || "Something went Wrong",
      });
    }
  };
  return (
    <div className="h-screen w-full flex">
      {/* Left */}
      <main className="w-1/2 flex justify-center items-center">
        <section className="w-3/5">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("email")}
                    type="text"
                    className="border border-gray-300 w-full h-10 rounded-full mt-4 py-2 px-6"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col mt-1">
                  <label htmlFor="" className="text-xl font-smibold">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="border border-gray-300 w-full h-10 rounded-full mt-4 py-2 px-6"
                  />
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-700 py-2 text-center rounded-full mt-10 w-full text-white font-bold text-xl"
                >
                  {isSubmitting ? "Loading..." : "Sign In"}
                </button>
                <div className="mt-4 text-right font-semibold">
                  <p>
                    Are You Have any Account ?{" "}
                    <span className="text-blue-700">
                      <Link to={`/register`}>Register</Link>
                    </span>
                  </p>
                </div>
                <div>
                  {errors.root && (
                    <div className="text-red-500 text-sm">
                      {errors.root.message}
                    </div>
                  )}
                </div>
              </div>
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

export default Login;
