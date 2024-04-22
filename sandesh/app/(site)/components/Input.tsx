'use client'
import clsx from "clsx"
import { type } from "os";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label:string;
    id:string;
    type?: string;
    required?:boolean;
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors,
    disables:boolean;
}
const Input: React.FC<InputProps> = ({
    label,id,propTypes,required,register,errors,disabled
}) => {
    return(
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-900"
             htmlFor="id">

             </label>
             <div className="mt-2">
                <input id={id} type={type} autoComplete={id} disabled={disabled}
                {...register(id, {required})}
                className={clsx(`form-input`)} />

             </div>
            
        </div>

    );
}
export default Input;
