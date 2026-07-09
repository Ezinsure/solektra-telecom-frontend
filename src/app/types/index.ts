export type PaymentMethod = "MoMo" | "Airtel Money" | "Bank card";

export interface Plan {
  id: string;
  vol: string;
  unit?: string;
  price: string;
  priceRaw?: number;
  validity: string;
  speed?: string;
  popular?: boolean;
  unlimited?: boolean;
  image?: string;
}

export interface PlanSection {
  title: string;
  desc: string;
  daily?: Plan[];
  weekly?: Plan[];
  monthly?: Plan[];
}

export type CategoryKey = "4g" | "volte" | "devices";

export interface SubItem {
  key: string;
  label: string;
}

export interface Category {
  key: CategoryKey;
  label: string;
  icon: string;
  subs: SubItem[];
}
