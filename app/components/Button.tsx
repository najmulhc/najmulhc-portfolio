'use client';
export default function Button({ children, onlick }: { children: React.ReactNode, onlick?: () => void }) {
  return (
    <button onClick={() => onlick()} className="border border-[#eeeeef] px-6 py-2 text-[#eeeeef] rounded-full cursor-pointer hover:text-[#111a2b] hover:bg-[#eeeeef]">
      {children}
    </button>
  );
}
