import { Plan, PlanSection } from "../types";
import { PlanCard } from "./PlanCard";

interface PlanGridProps {
    section: PlanSection;
    onSelect: (plan: Plan) => void;
}

function GridSection({
    label,
    plans,
    onSelect,
}: {
    label: string;
    plans: Plan[];
    onSelect: (plan: Plan) => void;
}) {
    if (plans.length === 0) return null;
    return (
        <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-3">
                {label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} onSelect={onSelect} />
                ))}
            </div>
        </div>
    );
}

const PlanGrid = ({ section, onSelect }: PlanGridProps) => {
    const hasSections =
        (section.daily?.length ?? 0) > 0 ||
        (section.weekly?.length ?? 0) > 0 ||
        (section.monthly?.length ?? 0) > 0;

    return (
        <div className="flex-1 overflow-auto p-10 bg-[#f5f0e870] rounded-3xl ">
            {/* Header */}
            <div className="mb-5">
                <h2 className="text-[15px] font-medium text-gray-900">{section.title}</h2>
                <p className="text-xs text-gray-500 mt-0.5">{section.desc}</p>
            </div>

            {!hasSections ? (
                <div className="flex items-center justify-center h-48 text-sm text-gray-400">
                    No plans available in this category.
                </div>
            ) : (
                <div className="space-y-7">
                    <GridSection label="Daily bundles" plans={section.daily ?? []} onSelect={onSelect} />
                    <GridSection label="Weekly bundles" plans={section.weekly ?? []} onSelect={onSelect} />
                    <GridSection label="Monthly bundles" plans={section.monthly ?? []} onSelect={onSelect} />
                </div>
            )}
        </div>
    );
}
export default PlanGrid