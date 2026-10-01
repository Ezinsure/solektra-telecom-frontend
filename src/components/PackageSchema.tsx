import { plansData } from "@/app/packages/plans";

const BASE = "https://www.solektratelecom.com";

type Plan = {
    id: string;
    vol: string;
    priceRaw?: number;
    validity?: string;
    speed?: string;
    unlimited?: boolean;
};

type Section = {
    title: string;
    desc?: string;
    daily?: Plan[];
    weekly?: Plan[];
    monthly?: Plan[];
};

function buildOffers() {
    const offers: object[] = [];

    for (const [key, raw] of Object.entries(plansData)) {
        const section = raw as unknown as Section;
        const [cat, ...rest] = key.split("-");
        const sub = rest.join("-");
        const plans = [section.daily, section.weekly, section.monthly]
            .filter(Boolean)
            .flat() as Plan[];

        for (const plan of plans) {
            if (!plan.priceRaw) continue;

            const sectionName = section.title.replace(/\s*—\s*/g, " - ");
            const name = `${sectionName}: ${plan.vol.trim()}`;
            const details = [
                plan.unlimited ? "Unlimited" : null,
                plan.speed,
                plan.validity ? `Valid ${plan.validity}` : null,
            ]
                .filter(Boolean)
                .join(", ");

            offers.push({
                "@type": "Offer",
                name,
                price: plan.priceRaw,
                priceCurrency: "RWF",
                availability: "https://schema.org/InStock",
                url: `${BASE}/packages?cat=${cat}&sub=${sub}`,
                areaServed: { "@type": "Country", name: "Rwanda" },
                itemOffered: {
                    "@type": "Service",
                    name,
                    description: details || section.desc,
                    provider: { "@id": `${BASE}/#organization` },
                },
            });
        }
    }

    return offers;
}

export default function PackagesSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Solektra Telecom 4G internet and VoLTE packages in Kigali  Rwanda",
        url: `${BASE}/packages`,
        provider: { "@id": `${BASE}/#organization` },
        itemListElement: buildOffers(),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}