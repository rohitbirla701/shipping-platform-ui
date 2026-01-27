import React from "react";
import Button from "../components/common/Button";

const TrustCTASection = () => {
    return (
        <section id="integrations" className="py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="flex justify-center my-28 items-center mb-10 relative">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        📍
                    </div>
                    <div className="absolute -top-14 left-80 bg-gray-100 border border-orange-300 text-black font-medium text-sm px-4 py-4 rounded-tr-4xl rounded-lg">
                        Trusted by 5000+ sellers Noida
                    </div>
                </div>
                <div className="bg-orange-500 text-white rounded-2xl px-10 py-12 mx-auto max-w-5xl">
                    <h2 className="text-4xl font-bold mb-4">
                        Start shipping smarter with Swayamship
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore elit sed do eiusmod tempor incididunt ut labore et.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="white">
                            Get started free
                        </Button>
                        <Button variant="white">
                            Book demo
                        </Button>
                    </div>
                </div>
                <div className="max-w-5xl mt-8 mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold mb-12">
                        Differentiation
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                        {[
                            { title: "Lowest Shipping Rates", icon: "https://cdn-icons-png.flaticon.com/128/6831/6831000.png" },
                            { title: "One Dashboard – Multiple Couriers", icon: "https://cdn-icons-png.flaticon.com/128/2160/2160162.png" },
                            { title: "Smart Courier Allocation", icon: "https://cdn-icons-png.flaticon.com/128/8593/8593364.png" },
                            { title: "Fast COD Remittance", icon: "https://cdn-icons-png.flaticon.com/128/10391/10391139.png" },
                            { title: "Pan-India Coverage", icon: "https://cdn-icons-png.flaticon.com/128/2160/2160162.png" },
                            { title: "Easy API & Platform Integrations", icon: "https://cdn-icons-png.flaticon.com/128/10391/10391139.png" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#D9D9D9] rounded-lg w-60 h-24 flex flex-col items-center justify-center gap-2 px-4"
                            >
                                <img src={item.icon} alt="" className="w-6 h-6 items-start" />
                                <p className="text-sm text-left font-medium  text-black">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustCTASection;
