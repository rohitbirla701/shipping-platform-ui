import React from "react";
import Button from "../components/common/Button";

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    How it works
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-14">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                            🔗
                        </div>
                        <p className="font-medium">Connect</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                            🚚
                        </div>
                        <p className="font-medium text-center">
                            Choose Courier <br /> Automatically
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                            📦
                        </div>
                        <p className="font-medium text-center">
                            Ship Orders <br /> Pan-India
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                            💰
                        </div>
                        <p className="font-medium text-center">
                            Track, Manage <br /> & Get Paid
                        </p>
                    </div>
                </div>

                <div className="bg-orange-600 text-white rounded-2xl py-10 px-6 mb-24">
                    <h3 className="text-3xl font-bold mb-6">
                        PAY-AS-YOU-SHIP MODEL
                    </h3>
                    <Button variant="white">
                        View full pricing
                    </Button>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                    Technology & Integration
                </h2>

                <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                    Seamlessly integrate with leading e-commerce platforms and marketplaces
                    to start shipping instantly without any technical hassle.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 place-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/825/825519.png" alt="WooCommerce" className=" h-20 py-5 px-5 border rounded-full" />
                    <img src="https://cdn-icons-png.flaticon.com/128/10096/10096351.png" alt="Amazon" className="h-20 py-5 px-5 border rounded-full" />
                    <img src="https://cdn-icons-png.flaticon.com/128/49/49579.png" alt="Flipkart" className="h-20 py-5 px-5 border rounded-full" />
                    <img src="https://cdn-icons-png.flaticon.com/128/825/825535.png" alt="Magento" className="h-20 py-5 px-5 border rounded-full" />
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968919.png" alt="Shopify" className="h-20 py-5 px-5 border rounded-full" />
                    <img src="https://cdn-icons-png.flaticon.com/128/8593/8593364.png" alt="POD" className="h-20 py-5 px-5 border rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
