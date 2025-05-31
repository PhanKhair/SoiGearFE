import { Card } from "@/components/globals/atoms/card";
import { CircleDollarSign, HandCoins, ShoppingBag, Store } from "lucide-react";
import { ReactNode } from "react";

interface OverviewAboutProps {
  className?: string;
}

const site = [
  {
    description: "Sale active our site",
    value: 10.5,
    icon: <Store size={40} strokeWidth={1.5} className="text-o-primary" />,
  },
  {
    description: "Monthly Product Sale",
    value: 33,
    icon: (
      <CircleDollarSign
        size={40}
        strokeWidth={1.5}
        className="text-o-primary"
      />
    ),
  },
  {
    description: "Customer active in our site",
    value: 45.5,
    icon: (
      <ShoppingBag size={40} strokeWidth={1.5} className="text-o-primary" />
    ),
  },
  {
    description: "Anual gross sale in our site",
    value: 25,
    icon: <HandCoins size={40} strokeWidth={1.5} className="text-o-primary" />,
  },
];

interface props {
  site: { description: string; value: number; icon: ReactNode };
}

function AboutCard({ site }: props) {
  return (
    <Card className="flex flex-col items-center justify-center gap-0">
      <div className="bg-secondary flex items-center justify-center rounded-full p-4">
        {site.icon}
      </div>

      <p className="text-primary mt-4 text-2xl font-bold">{site.value} K</p>
      <p className="text-primary font-medium">{site.description}</p>
    </Card>
  );
}

function OverviewAbout({ className }: OverviewAboutProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {site.map((ov, index) => (
          <div key={index}>
            <AboutCard site={ov} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewAbout;
