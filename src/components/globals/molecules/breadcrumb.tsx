import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  data: BreadcrumbItem[];
}
function Breadcrumb({ data }: BreadcrumbProps) {
  return (
    <div className="text-sm text-gray-500">
      <p className="flex space-x-2">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <a
                href={item.href}
                className="text-primary text-xs hover:underline sm:text-xl"
              >
                {item.title}
              </a>
            ) : (
              <span className="text-o-primary text-xs font-medium sm:text-xl">
                {item.title}
              </span>
            )}
            {index < data.length - 1 && (
              <span>
                <ChevronRight
                  size={20}
                  strokeWidth={1.65}
                  className="text-primary"
                />
              </span>
            )}
          </li>
        ))}
      </p>
    </div>
  );
}

export default Breadcrumb;
