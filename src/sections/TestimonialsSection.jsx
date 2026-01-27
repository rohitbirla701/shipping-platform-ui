import React, { useState } from "react";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        name: "Rahul Sharma",
        role: "Founder, D2C Brand",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        name: "Anjali Verma",
        role: "E-commerce Seller",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        name: "Amit Patel",
        role: "Startup Owner",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        name: "Neha Singh",
        role: "Operations Manager",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        name: "Vikas Mehta",
        role: "Agency Owner",
    },
];

const TestimonialsSection = () => {
    const [index, setIndex] = useState(1);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="testimonials" className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Let's see what our client say
                </h2>
                <p className="max-w-2xl mx-auto mb-16">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua enim ad minim veniam.
                </p>
                <div className="relative">
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${index * 60}%)`,
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-[60%] md:min-w-[40%] p-0.5 rounded-xl bg-transparent hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300">
                                <div className="bg-gray-900 rounded-xl px-6 pt-12 pb-6 text-left shadow-md relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full border flex items-center justify-center">
                                        👤
                                    </div>
                                    <p className="text-gray-200 mb-6">
                                        {item.text}
                                    </p>
                                    <div className="mb-1 flex justify-center">
                                        <h4 className="font-semibold text-orange-500">
                                            {item.name}
                                        </h4>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-sm text-gray-200">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            onClick={prevSlide}
                            className="bg-white text-black border cursor-pointer rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-500 hover:text-white transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white text-black border cursor-pointer rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-500 hover:text-white transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
