import { Headset, ShieldCheck, TruckElectric } from "lucide-react";
import { ReactNode } from "react";

interface PolicyAboutProps {
  className?: string;
}

const site = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: (
      <TruckElectric size={40} strokeWidth={1.5} className="text-o-primary" />
    ),
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: <Headset size={40} strokeWidth={1.5} className="text-o-primary" />,
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    icon: (
      <ShieldCheck size={40} strokeWidth={1.5} className="text-o-primary" />
    ),
  },
];

interface props {
  site: { title: string; description: string; icon: ReactNode };
}

function AboutCard({ site }: props) {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <div className="bg-secondary flex items-center justify-center rounded-full p-4">
        {site.icon}
      </div>

      <p className="text-primary mt-4 text-2xl font-bold">{site.title}</p>
      <p className="text-primary font-medium">{site.description}</p>
    </div>
  );
}

function PolicyAbout({ className }: PolicyAboutProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
        {site.map((policy, index) => (
          <div key={index}>
            <AboutCard site={policy} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolicyAbout;
