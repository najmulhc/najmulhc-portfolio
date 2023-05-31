import Button from "../Button";
import { Technology } from "@/app/types";

export default function TechCard({
  name,
  children,
  techType,
  description,
}: Technology) {
  return (
    <div className="flex flex-col items-center text-center border border-[#eeeeef] p-4 rounded-md ">
      {children}
      <br />
      <div className="flex flex-col items-center gap-2 ">
        <h2 className="text-[#eeeeef] text-2xl font-semibold">{name}</h2>
        <p className="px-2 bg-[#eeeeef] text-[.75rem]  text-none rounded-full ">
          {techType}
        </p>
        <p className="text-[#eeeeef] font-normal text-sm ">{description}</p>
        <Button>See Projects on {name}</Button>
      </div>
    </div>
  );
}
