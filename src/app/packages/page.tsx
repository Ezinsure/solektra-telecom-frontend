"use client";

import { use, useState } from "react";
import { PaymentModal } from "./PaymentMode";
import { plansData } from "./plans";
import { CategoryKey, Plan } from "../types";
import SidebarPage from "./Sidebar";
import PlanGrid from "./PlanGrid";

type Props = {
  searchParams: Promise<{
    cat?: string;
    sub?: string;
  }>;
};

const PricingPage = ({ searchParams }: Props) => {
  const resolvedSearchParams = use(searchParams);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [activeCat, setActiveCat] = useState<CategoryKey>(
    (resolvedSearchParams.cat as CategoryKey) ?? "4g"
  );

  const [activeSub, setActiveSub] = useState(
    resolvedSearchParams.sub ?? "volume"
  );

  const planKey = `${activeCat}-${activeSub}`;
  const currentSection = plansData[planKey] ?? {
    title: "Plans",
    desc: "",
    daily: [],
    weekly: [],
    monthly: [],
  };

  const handleSelect = (cat: CategoryKey, sub: string) => {
    setActiveCat(cat);
    setActiveSub(sub);
  };

  return (
    <main className="bg-white text-[#0a0a0a] min-h-screen py-3 container mx-auto max-w-10xl">
      <div className="">
        <p className="text-xs uppercase tracking-widest text-[#1d75b3] font-semibold my-6 ml-2">
          Packages Available
        </p>
      </div>
      <div className="flex h-[calc(100vh-48px)] bg-white/20 gap-3">
        <SidebarPage
          activeCat={activeCat}
          activeSub={activeSub}
          onSelect={handleSelect} />
        <PlanGrid section={currentSection} onSelect={setSelectedPlan} />
      </div>

      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)} />
      )}
    </main>
  );
}
export default PricingPage