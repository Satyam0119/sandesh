'use client';
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CgPassword } from "react-icons/cg";
import { register } from "module";
import Input from "./Input";

type Varient = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [varient,setVarient] = useState<Varient>('LOGIN')
    const [isLoading,setIsLoading] = useState(false);

    const toggleVarient = useCallback(() =>
    {
        if (varient === 'LOGIN'){
            setVarient('REGISTER');}
            else{
                setVarient('LOGIN');
        }
    },[varient]);
   
    const {register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''

        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);

        if (varient === 'REGISTER'){
            //Axios Register
        }
        if (varient === 'LOGIN'){
            //NextAuth SignIN 
        }
    }
    const socialAction = (action:string) => {
        setIsLoading(true);
        //NextAuth Social SignIn 
    }
    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
            <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input id="email" label="Email" register={register} />
                </form>
                

            </div>
        </div>
    )
}
export default AuthForm;