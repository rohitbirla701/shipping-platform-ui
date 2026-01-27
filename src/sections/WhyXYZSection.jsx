import React from "react";
import Button from "../components/common/Button";

const WhyXYZSection = () => {
    const reasons = [
        ">> AI-Based Courier Selection",
        ">> Real-Time Order Tracking",
        ">> NDR & RTO Management",
        ">> COD Reconciliation",
        ">> Branded Tracking Page",
        ">> Returns & Reverse Pickup",
    ];

    return (
        <section id="why-xyz" className="my-8 md:py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl uppercase font-bold text-gray-900 mb-4">
                    Why Swayamship?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {reasons.map((reason, index) => (
                        <Button
                            key={index}
                            className="w-full justify-center"
                        >
                            {reason}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyXYZSection;
