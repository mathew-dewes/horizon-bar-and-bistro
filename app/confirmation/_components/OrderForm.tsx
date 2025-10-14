"use client";

import Button from "@/components/Button";
import { PlaceOrder } from "@/server/mutations/order";
import { useState } from "react";
import Form from 'next/form'

export default function OrderForm() {
    const [checked, setChecked] = useState(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);


    };

    return (
        <Form  className="mt-10" action={PlaceOrder}>
            <div className="flex gap-2 items-center">
           <input onChange={handleChange} id="default-checkbox" type="checkbox" checked={checked} required
                className={` w-4 h-4 accent-sky-300 border-gray-300 rounded-sm focus:ring-sky-300`

                } />
            <p className="md:w-1/2">I confirm the order items above are correct and agree with the terms and conditions shown below</p>
            </div>
            <p className={`mt-2 md:w-1/2 absolute`}>
                Terms and conditions: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aperiam placeat delectus ut, tempora culpa!</p>
                <div className="mt-18">
            <Button text="Place Order"/>
                </div>


        </Form>
    )
}