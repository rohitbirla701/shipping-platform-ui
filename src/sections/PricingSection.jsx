import React from "react";
import Button from "../components/common/Button";

const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-black mb-12">
                    Choose a plan <br /> that works best for you
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group border border-gray-300 text-left cursor-pointer md:w-80 shadow-2xl rounded-xl p-6 transition-all duration-300 hover:bg-orange-500">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-white">
                            Lite
                        </h3>

                        <p className="text-gray-600 font-medium group-hover:text-white">
                            Starting at
                        </p>

                        <p className="text-4xl font-bold mb-4 group-hover:text-white">
                            Rs. 26/500gms
                        </p>

                        <p className="text-sm mb-6 group-hover:text-white">
                            Simple pricing designed for small businesses and beginners.
                        </p>

                        <Button className="w-60 flex justify-center mb-6 group-hover:bg-black group-hover:from-black! group-hover:via-black! group-hover:to-black! group-hover:text-white!">
                            Create an account
                        </Button>

                        <ul className="text-sm space-y-2">
                            <li className="group-hover:text-white">✔ Data Migration</li>
                            <li className="group-hover:text-white">✔ Simple tax Preparation</li>
                            <li className="group-hover:text-white">✔ Fund Administration</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Investor Records</li>
                        </ul>
                    </div>

                    <div className="group border border-gray-300 text-left cursor-pointer md:w-80 shadow-2xl rounded-xl p-6 transition-all duration-300 hover:bg-orange-500">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-white">
                            Lite
                        </h3>

                        <p className="text-gray-600 font-medium group-hover:text-white">
                            Starting at
                        </p>

                        <p className="text-4xl font-bold mb-4 group-hover:text-white">
                            Rs. 26/500gms
                        </p>

                        <p className="text-sm mb-6 group-hover:text-white">
                            Simple pricing designed for small businesses and beginners.
                        </p>

                        <Button className="w-60 flex justify-center mb-6 group-hover:bg-black group-hover:from-black! group-hover:via-black! group-hover:to-black! group-hover:text-white!">
                            Create an account
                        </Button>
                        <ul className="text-sm space-y-2">
                            <li className="group-hover:text-white">✔ Data Migration</li>
                            <li className="group-hover:text-white">✔ Simple tax Preparation</li>
                            <li className="group-hover:text-white">✔ Fund Administration</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Investor Records</li>
                        </ul>
                    </div>

                    <div className="group border border-gray-300 text-left cursor-pointer md:w-80 shadow-2xl rounded-xl p-6 transition-all duration-300 hover:bg-orange-500">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-white">
                            Lite
                        </h3>

                        <p className="text-gray-600 font-medium group-hover:text-white">
                            Starting at
                        </p>

                        <p className="text-4xl font-bold mb-4 group-hover:text-white">
                            Rs. 26/500gms
                        </p>

                        <p className="text-sm mb-6 group-hover:text-white">
                            Simple pricing designed for small businesses and beginners.
                        </p>
                        <Button className="w-60 flex justify-center mb-6 group-hover:bg-black group-hover:from-black! group-hover:via-black! group-hover:to-black! group-hover:text-white!">
                            Create an account
                        </Button>

                        <ul className="text-sm space-y-2">
                            <li className="group-hover:text-white">✔ Data Migration</li>
                            <li className="group-hover:text-white">✔ Simple tax Preparation</li>
                            <li className="group-hover:text-white">✔ Fund Administration</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Fund Manager</li>
                            <li className="group-hover:text-white">✔ Investor Records</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
