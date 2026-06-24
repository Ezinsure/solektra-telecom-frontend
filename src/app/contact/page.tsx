"use client";

import { HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";;
import { BsWhatsapp } from "react-icons/bs";

const contactCards = [
    {
        icon: <BsWhatsapp size={24} />,
        iconBg: "bg-blue-50",
        iconColor: "text-[#1d75b3]",
        title: "WhatsApp Support",
        subtitle: "Instant messaging support",
        action: {
            label: "Start chat",
            href: "https://wa.me/250794766463",
            type: "button",
        },
    },
    {
        icon: <HiOutlineMail size={26} />,
        iconBg: "bg-orange-50",
        iconColor: "text-[#e88824]",
        title: "Email Support",
        subtitle: "Direct business inquiries",
        action: {
            label: "info@solektra.co",
            href: "mailto:info@solektra.co",
            type: "link",
        },
    },
    {
        icon: <MdOutlinePhone size={26} />,
        iconBg: "bg-blue-50",
        iconColor: "text-[#1d75b3]",
        title: "Phone Support",
        subtitle: "Speak with our team",
        action: {
            label: "1150",
            href: "tel:1150",
            type: "link",
        },
    },
];

const ContactPage = () => {
    return (
        <section className="bg-[#f5f0e870] min-h-screen pt-16">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="container mx-auto max-w-7xl px-6">
                    <p className="text-xs uppercase tracking-widest text-[#1d75b3] font-semibold mb-4">get in touch</p>
                    <h1 className="text-4xl md:text-5xl font-semibold text-[#1d75b3] leading-tight mb-16">
                        We are here for you, contact us <br /> at{" "}
                        <span className="text-[#e88824]">anytime</span>
                    </h1>
                    <p className="text-[#0a0a0a]/50 text-base mx-auto my-8 leading-relaxed">
                        Have any questions about our services or just want to talk with us ?
                        Please reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
                    {contactCards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-8 flex flex-col gap-4"
                            style={{
                                boxShadow: `0 0 30px ${card.iconColor.includes("1d75b3") ? "rgba(29, 117, 179, 0.2)" : "rgba(232, 136, 36, 0.2)"}`
                            }}
                        >
                            <div
                                className={`w-14 h-14 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center`}
                            >
                                {card.icon}
                            </div>
                            {/* Title + subtitle */}
                            <div>
                                <p className="font-medium text-[#0a0a0a] text-base">
                                    {card.title}
                                </p>
                                <p className="text-sm text-[#0a0a0a]/45 mt-1">
                                    {card.subtitle}
                                </p>
                            </div>
                            {/* Divider */}
                            <div className="w-full border-t border-gray-100" />

                            {/* Action */}
                            {card.action.type === "button" ? (
                                <a
                                    href={card.action.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-[#e88824] hover:bg-[#d07a1e] text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-200"
                                >
                                    {card.action.label}
                                    <HiArrowRight />
                                </a>
                            ) : (
                                <a
                                    href={card.action.href}
                                    className="text-sm font-semibold text-[#0a0a0a]/70 hover:text-[#1d75b3] transition-colors duration-200"
                                >
                                    {card.action.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className="bg-white rounded-xl px-8 py-5 text-center my-16"
                >
                    <p className="text-sm text-[#0a0a0a]/70 leading-relaxed">
                        We&apos;re committed to providing prompt support. Our team is
                        available{" "}24/7, including weekendsto assist you with any inquiries.
                    </p>
                </div>
            </div>
            <div className="mt-10 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4968.801477361574!2d30.091481499999997!3d-1.9524035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7e8b630e8b3%3A0x84717cb368706a73!2sSolektra%20Rwanda%20Ltd!5e1!3m2!1sen!2srw!4v1781173815304!5m2!1sen!2srw"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Solektra Telecom Location — KABC Building, KN 5 RD, Kigali"
                ></iframe>
            </div>
        </section>
    );
};
export default ContactPage;
