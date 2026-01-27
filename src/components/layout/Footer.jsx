const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-1 order-last md:order-0 text-center md:text-left">
                    <h2 className="text-5xl font-bold text-white mb-5">Logo</h2>
                    <p className="text-xs leading-relaxed mb-4 text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua enim ad minim veniam quis
                        nostrud
                    </p>
                    <p className="text-sm text-gray-200 mb-1">
                        Email: support@example.com
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                        Call: +91 98765 43210
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mb-4 text-white text-lg">
                        <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
                        <i className="fab fa-linkedin-in hover:text-blue-500 cursor-pointer"></i>
                        <i className="fab fa-facebook-f hover:text-blue-600 cursor-pointer"></i>
                        <i className="fab fa-x-twitter hover:text-gray-400 cursor-pointer"></i>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <div className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-2 w-fit cursor-pointer hover:bg-white/10 transition">
                            <img src="/google-play-icon.png" className="w-8 h-8" />
                            <div className="text-white leading-tight">
                                <p className="text-[10px] uppercase tracking-wide">Get it on</p>
                                <p className="text-sm font-semibold">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4 text-center md:text-left">
                        Product
                    </h3>
                    <ul className="space-y-2 text-sm md:list-disc md:list-inside text-center md:text-left">
                        <li className="hover:text-white cursor-pointer">Shiprocket Shipping</li>
                        <li className="hover:text-white cursor-pointer">ShiprocketX</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Fulfillment</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Engage 360</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Capital</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Packaging</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Checkout</li>
                        <li className="hover:text-white cursor-pointer">Shiprocket Cargo</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4 text-center md:text-left">
                        Include Tabs
                    </h3>
                    <ul className="space-y-2 text-sm md:list-disc md:list-inside text-center md:text-left">
                        <li className="hover:text-white cursor-pointer">Company</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                        <li className="hover:text-white cursor-pointer">Resources</li>
                        <li className="hover:text-white cursor-pointer">Support</li>
                        <li className="hover:text-white cursor-pointer">Contact Info</li>
                        <li className="hover:text-white cursor-pointer">Social Media</li>
                        <li className="hover:text-white cursor-pointer">Legal (Privacy, T&C)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4 text-center md:text-left">
                        Resources
                    </h3>
                    <ul className="space-y-1 text-sm  md:list-disc md:list-inside text-center md:text-left">
                        <li className="hover:text-white cursor-pointer">Shipping Rate Calculator</li>
                        <li className="hover:text-white cursor-pointer">Volumetric Weight</li>
                        <li className="hover:text-white cursor-pointer">Free eCommerce Tools</li>
                        <li className="hover:text-white cursor-pointer">Knowledge Base</li>
                        <li className="hover:text-white cursor-pointer">Coupons</li>
                        <li className="hover:text-white cursor-pointer">FAQ's</li>
                        <li className="hover:text-white cursor-pointer">Developers</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Web Stories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4 text-center md:text-left">
                        Partner
                    </h3>
                    <ul className="space-y-1 text-sm  md:list-disc md:list-inside text-center md:text-left">
                        <li className="hover:text-white cursor-pointer">Carrier</li>
                        <li className="hover:text-white cursor-pointer">Technology</li>
                        <li className="hover:text-white cursor-pointer">Become a Partner</li>
                    </ul>
                </div>
            </div>
            <div className="border-t-2 border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} XYZ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
