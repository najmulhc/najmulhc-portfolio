const TopBannerSection = ({ numberText, text }) => {
  return (
    <div>
      <h1 className=" font-semibold text-[48px] text-white leading-[48px]">
        {numberText}+
      </h1>
      <h2 className="font-semibold text-[32px] text-[#dedede] leading-[32px]">
        {text}
      </h2>
    </div>
  );
};
const TopBanner = () => {
  return (
    <section className="px-32 bg-[#764ABC] text-white flex justify-center  gap-32 items-center text-center py-[48px]">
      <TopBannerSection numberText={15} text="Technologies" />
      <TopBannerSection numberText={5} text="Real world projects" />
      <TopBannerSection numberText={2} text="Years of experience" />
    </section>
  );
};

export default TopBanner;
