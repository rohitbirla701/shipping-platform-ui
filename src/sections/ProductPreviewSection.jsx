import React from "react";
import Button from "../components/common/Button";

const ProductPreviewSection = () => {
    return (
        <section id="product-preview" className="bg-[#FFF4EC] py-14 md:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Technology & Integrations
                    </h2>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        {[
                            ">> Order management screen",
                            ">> Courier comparison view",
                            ">> Tracking panel",
                            ">> Analytics snapshot",
                        ].map((item, index) => (
                            <Button
                                key={index}
                                className="rounded-full! px-5! py-3! text-sm"
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* RIGHT PREVIEW IMAGES */}
                <div className="relative w-full h-105 md:h-130">
                    <img
                        src="https://png.pngtree.com/template/20210630/ourmid/pngtree-dashboard-chart-data-statistics-image_541845.jpg"
                        alt="Dashboard"
                        className="absolute top-20 md:top-10 left-1/2 md:left-28 -translate-x-1/2 md:translate-x-0 w-72 md:w-96 rounded-xl shadow-2xl z-20" />
                    <img
                        src="https://cdn.dribbble.com/userupload/25666074/file/original-f09543784553d6901ec5233afc8e0f7a.png?format=webp&resize=400x300&vertical=center"
                        alt="Analytics"
                        className="absolute top-4 md:top right-6 md:right- w-44 md:w- rounded-xl shadow-xl z-30" />
                    <img
                        src="https://cdn.dribbble.com/userupload/12991112/file/original-eb469bc1025a7ccd17252cd4fdfc96e6.png"
                        alt="Orders"
                        className="absolute bottom-0 md:bottom-16 right-1/2 md:right-80 translate-x-1/2 md:translate-x-0 w-48 md:w-60 rounded-xl shadow-xl z-35" />
                    <img
                        src="https://png.pngtree.com/png-vector/20240428/ourmid/pngtree-happy-man-holding-mobile-phone-png-image_12340494.png"
                        alt="Person"
                        className="absolute bottom-16 md:bottom-60 left-1/2 md:left-auto md:right-96 -translate-x-1/2 md:translate-x-0 w-40 md:w-52 h-auto z-35" />
                </div>
            </div>
        </section>
    );
};

export default ProductPreviewSection;
