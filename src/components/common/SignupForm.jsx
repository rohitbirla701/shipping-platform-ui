const RegisterForm = () => {
    return (
        <div className="rounded-xl border border-gray-100">
            <div className="bg-orange-500 rounded-t-xl py-3">
                <h2 className="text-white text-2xl font-semibold text-center">
                    Register for Free
                </h2>
            </div>
            <div className="p-5">
                <div className="flex mb-4 justify-center mx-10 gap-3 ">
                    <>
                        <button className="flex-1 border cursor-pointer rounded-md border-gray-500 py-2 text-sm font-bold text-black">
                            B2B Seller
                        </button>
                    </>
                    <>
                        <button className="flex-1 border cursor-pointer rounded-md border-gray-500  py-2 text-sm font-bold text-black">
                            B2C Seller
                        </button>
                    </>
                </div>
                <div className="relative mb-3">
                    <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                        What best describes you?
                    </label>
                    <select className="w-full border rounded border-gray-500 px-3 py-2 focus:outline-none">
                        <option value="">Select an option</option>
                        <option>D2C Brand</option>
                        <option>E-commerce Seller</option>
                        <option>Marketplace Seller</option>
                        <option>SME / Startup</option>
                        <option>Retailer</option>
                    </select>
                </div>

                <form className="space-y-3 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                First Name
                            </label>
                            <input className="w-full border border-gray-500 rounded px-3 py-2" />
                        </div>
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Last Name
                            </label>
                            <input className="w-full border border-gray-500 rounded px-3 py-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Company Name
                            </label>
                            <input className="w-full border border-gray-500 rounded px-3 py-2" />
                        </div>

                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Phone Number
                            </label>
                            <input className="w-full border border-gray-500 rounded px-3 py-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Your Monthly Shipments
                            </label>
                            <select className="w-full border border-gray-500 rounded px-3 py-2">
                                <option value="">Select shipment potential</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                State
                            </label>
                            <select className="w-full border border-gray-400 rounded px-3 py-2">
                                <option value="">Select State</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Email
                            </label>
                            <input className="w-full border border-gray-500 rounded px-3 py-2" />
                        </div>
                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full border border-gray-500 rounded px-3 py-2"
                            />
                        </div>
                    </div>
                    <label className="flex items-start gap-2 text-sm text-gray-500">
                        <input type="checkbox" className="mt-1" />
                        <span>
                            By clicking Sign up for Free, you agree to fship&apos;s Terms of Service and Privacy Policy.
                        </span>
                    </label>
                    <button
                        type="submit"
                        className="bg-black cursor-pointer text-white w-full py-3 rounded-md font-medium"
                    >
                        Register
                    </button>
                    <p className="text-lg text-center text-gray-500">
                        Already a user?{" "}
                        <span className="text-orange-500 font-semibold cursor-pointer">
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
