import Image from "next/image";
import { Plan, CategoryKey } from "../types";
import { IoMdCall } from "react-icons/io";
import RouterImg from "../../../public/assets/images/routerimge.jpg";
import SmartphoneImg from "../../../public/assets/images/galaxy.jpg";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deviceImages: Record<string, any> = {
  "rh": RouterImg,
  "ds": SmartphoneImg,
};

function getDeviceImage(id: string) {
  const prefix = id.split("-")[0];
  return deviceImages[prefix] ?? null;
}

interface PlanCardProps {
  plan: Plan;
  activeCat: CategoryKey;
  onSelect: (plan: Plan) => void;
}

export function PlanCard({ plan, activeCat, onSelect }: PlanCardProps) {
  const isDevice = activeCat === "devices";

  // Device card 
  if (isDevice) {
    const img = getDeviceImage(plan.id);

    return (
      <div
        className={`relative flex flex-col rounded-xl border overflow-hidden bg-white transition-all duration-200 hover:shadow-[0_4px_20px_rgba(29,117,179,0.10)] hover:border-[#1d75b3]/40 ${plan.popular ? "border-[#1d75b3] border-[1.5px]" : "border-gray-200 border-[0.5px]"
          }`}
      >
        {plan.popular && (
          <span className="absolute top-3 right-3 z-10 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#E6F1FB] text-[#0C447C]">
            Popular
          </span>
        )}

        {/* image */}
        <div className="bg-gradient-to-b from-gray-50 to-white flex items-center justify-center h-44 px-6 pt-4 pb-2">
          {img ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-44 w-full cursor-zoom-in">
                  <Image
                    src={plan.image || img}
                    alt={plan.vol}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-none bg-transparent shadow-none p-0">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={plan.image || img}
                    alt={plan.vol}
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <div className="h-36 w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 text-xs">
              No image
            </div>
          )}
        </div>

        {/* info */}
        <div className="flex flex-col gap-2 p-4 border-t border-gray-100">
          {/* name */}
          <p className="text-sm font-medium text-[#0a0a0a]/80 leading-snug">{plan.vol}</p>

          {/* specs */}
          {plan.speed && (
            <div className="flex flex-wrap gap-1.5">
              {plan.speed.split("·").map((spec, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium"
                >
                  {spec.trim()}
                </span>
              ))}
            </div>
          )}

          {/* price */}
          <p className="text-base font-semibold text-[#1d75b3]">{plan.price}</p>

          {/* contact */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
            <IoMdCall className="w-3 h-3 shrink-0" />
            Call: <a href="tel:1150" className="text-[#1d75b3] hover:underline font-medium">1150</a>
          </div>
          <a href="https://wa.me/250794766463" target="_blank" rel="noopener noreferrer" className="text-[#1d75b3] hover:underline font-medium">
            <button
              className="w-full h-8 rounded-lg bg-[#1d75b3] hover:bg-[#0c3d6b] active:scale-[0.98] text-white text-sm font-medium transition-all duration-150 cursor-pointer mt-1"
            >
              Order now
            </button></a>
        </div>
      </div>
    );
  }

  // Standard plan card (4G / VoLTE) 
  return (
    <div
      className={`relative flex flex-col gap-3 rounded-xl p-4 border transition-all duration-200 bg-white hover:border-[#1d75b3]/40 hover:shadow-[0_4px_20px_rgba(29,117,179,0.08)] ${plan.popular
        ? "border-[#1d75b3] border-[1.5px]"
        : "border-gray-200 border-[0.5px]"
        }`}
    >
      <div className="flex flex-wrap gap-1.5 min-h-[22px] absolute top-4 right-2">
        {plan.popular && (
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#E6F1FB] text-[#0C447C]">
            Popular
          </span>
        )}
        {plan.unlimited && (
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FAEEDA] text-[#854F0B]">
            Unlimited
          </span>
        )}
      </div>

      <div>
        <p className="text-base font-medium text-[#0a0a0a]/80 leading-tight">
          {plan.vol}
          {plan.unit && (
            <span className="text-sm font-normal text-gray-400 ml-1">· {plan.unit}</span>
          )}
        </p>
        <p className="text-[14px] font-medium text-[#1d75b3] mt-1">{plan.price}</p>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed flex-1">{plan.speed}</p>

      <div className="flex items-center gap-1 text-[11px] text-gray-400">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3 h-3 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {plan.validity}
      </div>

      <button
        onClick={() => onSelect(plan)}
        className="w-full h-7 rounded-lg bg-[#1d75b3] hover:bg-[#0c3d6b] active:scale-[0.98] text-white text-sm font-medium transition-all duration-150 cursor-pointer"
      >
        Select
      </button>
    </div>
  );
}