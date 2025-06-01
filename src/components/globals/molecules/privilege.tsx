import { PackageCheck, RefreshCcw } from "lucide-react";
interface PrivilegeProps {
  className?: string;
}

function Privilege({ className }: PrivilegeProps) {
  return (
    <div className={className}>
      <div className="grid h-full w-full rounded-md border">
        <div className="row-span-1 flex items-center border-b">
          <div className="flex items-center gap-4 px-4 py-2">
            <PackageCheck size={35} strokeWidth={1.5} />

            <div>
              <p className="text-lg font-medium">Free Delivery</p>
              <p className="text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex items-center">
          <div className="flex items-center gap-4 px-4 py-2">
            <RefreshCcw size={35} strokeWidth={1.5} />
            <div>
              <p className="text-lg font-medium">Return Delivery</p>
              <p className="text-sm">Free 30 Days Delivery Returns Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privilege;
