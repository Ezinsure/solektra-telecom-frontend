import { Plan } from "../types";

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export function PlanCard({ plan, onSelect }: PlanCardProps) {
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

      {/* Volume */}
      <div>
        <p className="text-base font-medium text-[#0a0a0a]/80 leading-tight">
          {plan.vol}
          {plan.unit && (
            <span className="text-sm font-normal text-gray-400 ml-1">· {plan.unit}</span>
          )}
        </p>
        <p className="text-[14px] font-medium text-[#1d75b3] mt-1">{plan.price}</p>
      </div>

      {/* Speed */}
      <p className="text-xs text-gray-500 leading-relaxed flex-1">{plan.speed}</p>

      {/* Validity */}
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