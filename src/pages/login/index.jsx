import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "../../index.css";
import {
  ClosedEyeIcon,
  EmailIcon,
  EyeIcon,
  GoogleIcon,
  LockIcon,
  SpinnerIcon,
} from "../../components/icons";
import { useState } from "react";
import useAuthenticate from "../../hooks/useAuthenticate";
import { login } from "../../hooks/requests";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password should include at least 1 lowercase, 1 uppercase, a number, and be a minimum of 8 characters in length.",
    ),
});

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { authenticateUser, error, isPending, isError } =
    useAuthenticate(login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const onSubmit = (user) => {
    authenticateUser(user);
  };

  const errorElement = (msg, key = "") => (
    <p key={key} className="text-xl text-red-700">
      {msg}
    </p>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-208 border p-10">
      <h1 className="text-2xl font-bold sm:text-3xl">
        Hi, Welcome to <span className="text-primary">HomeHelper</span>
      </h1>

      <div className="grid grid-cols-2 gap-4 py-10 text-xl sm:text-2xl">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="email">Email</label>
          <div className="relative flex w-full items-center">
            <span className="absolute pl-2">
              <EmailIcon color={"#999"} dimensions={30} />
            </span>
            <input
              {...register("email")}
              className="mt-1 w-full rounded-md border border-neutral-500 px-2 py-4 pl-12 text-xl"
              placeholder="Entrer votre Email"
            />
          </div>
          {errors.email && errorElement(errors.email.message)}
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="password">Mot de passe</label>
          <div className="relative flex w-full items-center">
            <span className="absolute pl-2">
              <LockIcon color={"#999"} dimensions={30} />
            </span>
            <input
              {...register("password")}
              className="mt-1 w-full rounded-md border border-neutral-500 px-12 py-4 text-xl"
              type={passwordVisible ? "text" : "password"}
              placeholder="Entrer votre mot de passe"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 cursor-pointer"
            >
              {passwordVisible ? (
                <EyeIcon color={"#999"} dimensions={35} />
              ) : (
                <ClosedEyeIcon color={"#999"} dimensions={25} />
              )}
            </span>
          </div>
          {errors.password && errorElement(errors.password.message)}
        </div>
      </div>

      <button
        type="submit"
        className="items-cetner my-2 flex w-full justify-center gap-2 rounded-md bg-primary py-4 text-xl font-bold text-white sm:text-2xl"
        disabled={isPending}
      >
        {isPending && <SpinnerIcon dimensions={30} color={"#fff"} />}
        Login
      </button>
      {isError && errorElement(error.response?.data?.message)}

      <p className="my-2 text-center text-xl font-light text-neutral-400 sm:text-2xl">
        ------------- Ou connecter avec -------------
      </p>

      <button className="my-2 flex w-full items-center justify-center gap-4 rounded-md border bg-transparent py-4 text-xl font-light text-primary sm:text-2xl">
        <GoogleIcon dimensions={40} /> Connecter avec Google
      </button>
    </form>
  );
};

export default LoginForm;
