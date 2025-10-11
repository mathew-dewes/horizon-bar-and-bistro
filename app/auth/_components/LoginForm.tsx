"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { loginUserSchema } from "@/server/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


type FormFields = z.infer<typeof loginUserSchema>

export default function LoginForm(){
      const [serverError, setServerError] = useState("");
          const { register, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<FormFields>({ resolver: zodResolver(loginUserSchema) });

            const onSubmit = async (values: FormFields) => {
   console.log(values);
   

    }
      
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input {...register("email")} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            {errors.email &&
                    <ErrorMessage message={errors.email?.message} />}
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      {errors.password &&
                    <ErrorMessage message={errors.password?.message} />}
  </div>
      <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Dont have an account? Click on Register
      </label>
      <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Forgot password? Click HERE to reset
      </label>

      <div className="flex gap-5">
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isSubmitting ? "Logging in" : "Login"}</button>
     <p className="mt-5 text-red-500">{serverError}</p>
  <Link href={'/auth/register'} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</Link>
 

      </div>
      
  

</form>
    )
}