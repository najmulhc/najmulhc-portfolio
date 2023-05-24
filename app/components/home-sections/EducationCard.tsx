export default function EducationCard({
  children,
  name,
  course,
  year,
}: {
  children: React.ReactNode;
  name?: string;
  course?: string;
  year?: string | number;
}) {
  return (
    <div className="border border-[#eeeeef] p-4 rounded-lg flex flex-col md:flex-row  md:justify-start gap-6  md:items-start items-center">
      {children}
      <div className="text-center md:text-left">
        <h2 className=" text-[#eeeeef] text-3xl font-semibold ">{name}</h2>
        <div className=" text-md items-center text-[#eeeeef] font-normal opacity-75 mb-4">
          <h3>{course}</h3>
          <h3>{year}</h3>{" "}
        </div>
      </div>
    </div>
  );
}
