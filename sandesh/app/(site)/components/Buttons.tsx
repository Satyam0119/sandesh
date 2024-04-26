'use client';
import clsx from "clsx";
 
interface ButtonProps{
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode ;
    onclick?: () => void;
    secondary?: boolean;
    danger?: boolean;
}
const Button =  () => {
    return(
        <div>
            hello
        </div>
    )
}
export default Button