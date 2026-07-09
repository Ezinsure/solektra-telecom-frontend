import { CategoryKey, Plan, PlanSection } from "../types";
import { PlanCard } from "./PlanCard";

interface PlanGridProps {
    section: PlanSection;
    activeCat: CategoryKey;
    onSelect: (plan: Plan) => void;
}

function GridSection({
    label,
    plans,
    activeCat,
    onSelect,
}: {
    label: string;
    plans: Plan[];
    activeCat: CategoryKey;
    onSelect: (plan: Plan) => void;
}) {
    if (plans.length === 0) return null;
    return (
        <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-3">
                {label}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
                {plans.map((plan) => (
                    // <PlanCard key={plan.id} plan={plan} onSelect={onSelect} />
                    <PlanCard key={plan.id} plan={plan} activeCat={activeCat} onSelect={onSelect} />
                ))}
            </div>
        </div>
    );
}

const PlanGrid = ({ section, activeCat, onSelect }: PlanGridProps) => {
    const hasSections =
        (section.daily?.length ?? 0) > 0 ||
        (section.weekly?.length ?? 0) > 0 ||
        (section.monthly?.length ?? 0) > 0;

    return (
        <div className="flex-1  overflow-auto p-10 bg-[#f5f0e870] rounded-3xl ">
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
                    <GridSection label={`${activeCat === 'devices' ? 'Available Devices' : 'Daily bundles'}`} plans={section.daily ?? []} onSelect={onSelect} activeCat={activeCat} />
                    <GridSection label={`${activeCat === 'devices' ? 'Available Devices' : 'Weekly bundles'}`} plans={section.weekly ?? []} onSelect={onSelect} activeCat={activeCat} />
                    <GridSection label={`${activeCat === 'devices' ? 'Available Devices' : 'Monthly bundles'}`} plans={section.monthly ?? []} onSelect={onSelect} activeCat={activeCat} />
                </div>
            )}
        </div>
    );
}
export default PlanGrid