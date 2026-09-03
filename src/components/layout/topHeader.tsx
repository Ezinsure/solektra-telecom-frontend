import { useState } from "react";
import RechargeModal from "../rechargeModal";
import BalanceModal from "../balanceModal";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { RiAddLine } from "react-icons/ri";

const TopHeader = () => {
    const [rechargeModalOpen, setRechargeModalOpen] = useState(false);
    const [balanceModalOpen, setBalanceModalOpen] = useState(false);

    return (
        <div className="bg-[#0072CE] text-white hidden lg:flex  flex-row justify-between items-center px-12 py-1 text-xs ">
            <div className="flex flex-row justify-between text-xs  gap-2">
                <div className="flex gap-4 font-semibold">
                    <div className="flex  gap-1">
                        <IoLocationOutline size={15} />
                        <span>KN 5RD Kigali , Rwanda</span>
                    </div>
                    <div className="flex gap-2">
                        <IoTimeOutline size={15} />
                        <span>Mon to Sat: 8.00 am - 5.00 pm</span>
                    </div>
                </div>
            </div>
            {/* Recharge/Balance Bar */}
            <div className="flex items-center justify-center gap-3 text-xs ">
                <button
                    onClick={() => setRechargeModalOpen(true)}
                    className="flex border bg-[#F7941D] items-center gap-2 px-4 py-1 hover:bg-white/10 rounded-lg transition-colors font-semibold cursor-pointer"
                >
                    <RiAddLine size={15} />
                    Recharge
                </button>

                <span className="w-px h-5 bg-white/30"></span>

                <button
                    onClick={() => setBalanceModalOpen(true)}
                    className="flex border border-[#F7941D] text-[#F7941D] items-center gap-2 px-2 py-1 hover:bg-white rounded-lg transition-colors font-semibold cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Check Balance
                </button>
            </div>
            {/* Modals */}
            <RechargeModal
                isOpen={rechargeModalOpen}
                onClose={() => setRechargeModalOpen(false)}
            />
            <BalanceModal
                isOpen={balanceModalOpen}
                onClose={() => setBalanceModalOpen(false)}
            />
        </div>)
}
export default TopHeader;