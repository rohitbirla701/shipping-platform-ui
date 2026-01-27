import React from "react";

const HeroSection = ({ authType }) => {
    return (
        <section id="hero" className="h-auto overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center px-6">
                <div
                    className={`transition-all duration-500
                        ${authType ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"}`}
                >
                    {!authType && (
                        <>
                            <h1 className="text-2xl md:text-8xl font-bold mb-4">
                                Value-Driven
                            </h1>
                            <p className="text-black text-lg md:text-3xl mb-6">
                                Who it's for + Benefit
                            </p>
                            <button className="bg-orange-500 font-semibold cursor-pointer text-white md:px-5 py-1 px-2 md:py-3 text-sm md:text-lg rounded-lg hover:bg-orange-600 transition">
                                Book a Demo
                            </button>
                        </>
                    )}
                </div>
                <div
                    className={`relative flex justify-center transition-all duration-500
                        ${authType ? "col-start-1" : "col-start-2"}`}
                >
                    <div className="relative mt-3">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/6075eb6252875a5c34d7c98b/304cd44a-7bb9-40b1-8dad-f03e063595a4/Pointing+Sitting+Person.png"
                            className={`w-52 md:w-80 max-w-md transition-transform duration-500 ${authType ? "-translate-x-6" : "translate-x-0"}`}
                            alt="hero"
                        />
                        <div
                            className={`absolute -top-3 rounded-xl rounded-tr-4xl bg-white/70 backdrop-blur-md py-1 px-2 md:px-3 md:py-1 shadow-lg flex items-center gap-3 border border-black transition-all duration-500
                                    ${authType
                                    ? "left-1/2 "
                                    : "md:-right-28"}`}>
                            <div className="md:w-8 md:h-8 w-5 h-5 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full text-sm font-bold">
                                ★
                            </div>
                            <p className="text-black text-xs md:text-sm font-semibold">
                                Trusted by 5,000+ Sellers
                            </p>
                        </div>
                        <div className="absolute md:bottom-44 -left-16 bg-white/60 backdrop-blur-xl px-3 py-1.5 rounded-tr-4xl rounded-lg shadow-md border border-black flex items-center gap-2">
                            <div className="w-6 h-6 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full text-xs font-bold">
                                ★
                            </div>
                            <p className="text-black text-sm font-semibold">
                                Trusted by 5,000+ Sellers
                            </p>
                        </div>
                        <div className="absolute top-40 md:top-64 bg-black text-white w-10 h-10 flex items-center justify-center rounded-lg shadow">
                            📦
                        </div>


                        {authType && (
                            <div className="absolute top-28 -right-52 border border-orange-400 rounded-full py-12 px-12 -translate-y-1/2 hidden md:block">

                                {/* Center Orange Circle */}
                                <div className="relative w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-xl">
                                    Start shipping
                                    <br />
                                    in 3 easy steps

                                    {/* Step 1 */}
                                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 font-bold flex flex-col items-center text-xs text-black">
                                        Sign Up
                                        <div className="w-7 h-7 mt-5 bg-orange-500 text-white rounded-full flex items-center justify-center mb-1">
                                            1
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="absolute top-1/2 -right-36 -translate-y-1/2 font-bold flex items-center text-xs text-black">
                                        <div className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center mr-1">
                                            2
                                        </div>
                                        Complete KYC
                                    </div>

                                    {/* Step 3 */}
                                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 font-bold flex flex-col items-center text-xs text-black">
                                        <div className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center mb-1">
                                            3
                                        </div>
                                        Recharge Account
                                    </div>

                                    {/* Step 4 */}
                                    <div className="absolute top-1/2 -left-38 -translate-y-1/2 font-bold flex items-center text-xs text-black">
                                        Start Shipping
                                        <div className="w-7 h-7 ml-2 bg-orange-500 text-white rounded-full flex items-center justify-center mr-1">
                                            4
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className="bg-orange-500 w-full py-10 mt-16">
                <h3 className="text-white font-bold text-3xl text-center mb-8">
                    Courier Partners
                </h3>
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4">
                    {[
                        "Delhivery",
                        "Blue Dart",
                        "Ecom Express",
                        "Xpressbees",
                        "DTDC",
                        "Shadowfax",
                    ].map((partner) => (
                        <div
                            key={partner}
                            className="text-white text-lg font-medium border rounded-lg h-12 flex items-center justify-center"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
