import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-primary mt-40">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-16 xl:grid xl:grid-cols-4 xl:gap-8">
            {siteConfig.footerItems.map(({ title, links }) => (
              <div key={title} className="mt-16 xl:mt-0">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        className="slow text-card hover:text-secondary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-card text-center">
              &copy; 2025 SoiGear. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
