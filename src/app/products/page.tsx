import React from "react";

const ProductsPage = () => {
    return (
        <main className="bg-white text-[#0a0a0a]">
            {/* ── HERO SECTION ── */}
            <section className="bg-white py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <p className="text-xs uppercase tracking-widest text-[#1d75b3] font-semibold mb-4">
                        Products Available
                    </p>
                    <h1 className="text-4xl md:text-5xl font-semibold !text-[#0a0a0a] leading-tight mb-6">
                      Make smarter investiments decision {" "}
                        <span className="text-[#1d75b3]">faster</span>
                    </h1>
                    <p className="text-[#0a0a0a]/50 text-base leading-relaxed max-w-4xl">
                        Our mission is to bridge the digital divide across Rwanda — ensuring
                        every home, business, and community can thrive in a connected world.
                    </p>
                </div>
            </section>
        </main>
    );
};
export default ProductsPage;
