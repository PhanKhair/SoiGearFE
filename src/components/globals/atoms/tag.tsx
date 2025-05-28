interface tagProps {
  label: string;
}

function Tag({ label }: tagProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-6 h-10 border rounded-sm bg-orange-500"></div>

      <p className="font-bold text-xl text-orange-500">{label}</p>
    </div>
  );
}

export default Tag;
