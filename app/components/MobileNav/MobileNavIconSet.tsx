import Link from "next/link";
import { IconType } from "react-icons/lib";

export default function MobileNavIconSet({
  icon: Icon,
  text,
  link,
}: {
  icon: IconType;
  text: string;
  link: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0 text-[#eeeeef]  hover:opacity-100">
      <Icon className="text-2xl" />
      <Link className="text-xs font-normal" href={link}>
        {text}
      </Link>
    </div>
  );
}
