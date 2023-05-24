import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default function SeeMore({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <section className="text-[#eeeeef] mx-10 mb-8 transition-all">
      <Link
        href={href}
        className="flex items-center gap-1 hover:gap-2 justify-end"
      >
        {children} <FaArrowRight />
      </Link>
    </section>
  );
}
