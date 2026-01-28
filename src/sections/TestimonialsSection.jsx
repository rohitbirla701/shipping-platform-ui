import React, { useState, useRef, useEffect } from "react";

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
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        const calculate = () => {
            if (!containerRef.current || !cardRef.current) return;

            const gap = window.innerWidth >= 768 ? 24 : 0;
            const cardW = cardRef.current.offsetWidth + gap;
            const visibleWidth = containerRef.current.offsetWidth;

            setCardWidth(cardW);
            setMaxIndex(
                Math.max(
                    0,
                    Math.ceil((cardW * testimonials.length - visibleWidth) / cardW)
                )
            );
        };

        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, []);

    const prevSlide = () => setIndex((p) => Math.max(p - 1, 0));
    const nextSlide = () => setIndex((p) => Math.min(p + 1, maxIndex));

    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Let's see what our client say
                </h2>
                <p className="max-w-2xl mx-auto mb-16">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
                </p>

                <div ref={containerRef} className="relative">
                    <div
                        className="flex gap-0 md:gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${index * cardWidth}px)`,
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                ref={i === 0 ? cardRef : null}
                                className="min-w-full gap-2 md:min-w-[40%]"
                            >
                                <div className="p-0.5 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 overflow-visible">
                                    <div className="bg-gray-900 rounded-xl px-8 pt-16 pb-10 relative">

                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full border-4 border-gray-900 flex items-center justify-center">
                                            👤
                                        </div>
                                        <p className="text-gray-200 mb-8">{item.text}</p>
                                        <h4 className="text-center font-semibold text-orange-500 text-lg">
                                            {item.name}
                                        </h4>
                                        <p className="text-center text-sm text-gray-300">
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
                            disabled={index === 0}
                            className={`w-10 h-10 rounded-full font-bold text-2xl cursor-pointer flex items-center justify-center ${index === 0
                                ? "bg-gray-600"
                                : "bg-white text-black hover:bg-orange-500 hover:text-white"
                                }`}
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={index === maxIndex}
                            className={`w-10 h-10 rounded-full font-bold text-2xl cursor-pointer flex items-center justify-center ${index === maxIndex
                                ? "bg-gray-600"
                                : "bg-white text-black hover:bg-orange-500 hover:text-white"
                                }`}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
