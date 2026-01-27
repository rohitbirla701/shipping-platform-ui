import React from "react";

const Button = ({
    children,
    className = "",
    onClick,
    type = "button",
    variant = "orange",
}) => {
    const baseStyles =
        "inline-flex items-center justify-center cursor-pointer py-4 px-5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none";

    const variants = {
        orange:
            "text-white bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 hover:from-orange-700 hover:via-orange-600 hover:to-orange-700",

        black:
            "bg-black text-white hover:bg-black",

        white:
            "bg-white text-black border border-black hover:bg-black hover:text-white",

        outline:
            "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white",
    };


    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
