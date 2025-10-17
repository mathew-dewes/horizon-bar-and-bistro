"use client";
console.log("✅ UpdateQuantityForm loaded in browser");


import ErrorMessage from "@/components/ErrorMessage";
import { updateInventory } from "@/server/mutations/products";
import { updateQuantitySchema } from "@/server/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"





type FormFields = z.infer<typeof updateQuantitySchema>;

export function UpdateQuantityForm({ productId }:
    { productId: string }
) {
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
        useForm<FormFields>({ resolver: zodResolver(updateQuantitySchema) });

    const onSubmit = async (values: FormFields) => {

        const newQuantity = values.value;


        const result = await updateInventory(productId, newQuantity);

        if (result.status === "error") {
            setSuccess(false)
            setServerError(true)
            console.log(result.message);
        } else {
            reset();
            setServerError(false)
            setSuccess(true)
        }




    }

    return (
        <form className="flex gap-2 items-center w-full relative" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3">

                <input required {...register("value", { valueAsNumber: true })} type="number" className="border w-20 rounded indent-2" />
                <button type="submit" className={`px-2 w-24 py-2 text-sm rounded font-semibold relative cursor-pointer text-white bg-green-400 hover:bg-green-600`}>
                    {isSubmitting ? "Updating" : "Update"}
                </button>
            </div>
            <div className="h-5 flex justify-center items-center">
                {errors.value &&
                    <ErrorMessage message={"Error: " + errors.value?.message} />}
                <p className={`text-green-500 ${success ? "visible" : "invisible"}`}>
                    Inventory updated
                </p>
                <p className={`text-red-500 ${serverError ? "visible" : "invisible"}`}>
                    Server error
                </p>
            </div>



        </form>
    )
}