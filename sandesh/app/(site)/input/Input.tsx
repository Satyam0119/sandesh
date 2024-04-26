'use client'
import clsx from "clsx"
import { type } from "os";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disables: boolean;
}
const Input: React.FC<InputProps> = ({
    label, id, propTypes, required, register, errors, disabled
}) => {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 border-gray-950"
                htmlFor="id">

            </label>
            <div className="mt-2">
                <input id={id} type={type} autoComplete={id} disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(`form-input block w-full *:rounded-md border-0 
                py--1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 *:focus:ring-inset focus:ring-offset-sky-600 sm:text-sm sm:leading-6`,
                 errors[id] && "focus:ring-rose-500",
                  disabled && "opacity-50 cursor-default")} />

            </div>

        </div>

    );
}
export default Input;