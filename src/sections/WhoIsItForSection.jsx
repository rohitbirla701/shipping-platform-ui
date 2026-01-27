import React from "react";

const WhoIsItForSection = () => {
    return (
        <section id="who-is-it-for" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Who is it for?
                </h2>
                <p className="max-w-2xl mx-auto mb-12">
                    XYZ is built for different types of users who want speed,
                    simplicity, and scalability in one platform.
                </p>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="py-8 px-3 bg-gray-900 border border-orange-500 rounded-xl font-semibold text-center">
                            D2C Brands
                        </div>
                        <div className="py-8 px-3 bg-gray-900 border border-orange-500 rounded-xl font-semibold text-center">
                            E-commerce Sellers
                        </div>
                        <div className="py-8 px-3 bg-gray-900 border border-orange-500 rounded-xl font-semibold text-center">
                            Shopify / WooCommerce <br /> Storesellers
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="py-8 px-3 bg-gray-900 border border-orange-500 rounded-xl font-semibold text-center max-w-xs w-full">
                            SMEs & Startups
                        </div>
                        <div className="py-8 px-3 bg-gray-900 border border-orange-500 rounded-xl font-semibold text-center max-w-xs w-full">
                            Marketplace <br /> Sellers (Amazon / Flipkart)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItForSection;
