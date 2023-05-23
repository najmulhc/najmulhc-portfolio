'use client';
export default function Button({ children, onlick, className}: { children: React.ReactNode, onlick?: () => void , className?: string}) {
  return (
    <button   className={`border border-[#eeeeef] px-6 py-2 text-[#eeeeef] rounded-full cursor-pointer hover:text-[#111a2b] hover:bg-[#eeeeef] ${className}`}>
      {children}
    </button>
  );
}
