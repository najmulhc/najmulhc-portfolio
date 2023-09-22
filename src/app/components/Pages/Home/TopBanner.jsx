const TopBannerSection = ({ numberText, text }) => {
  return (
    <div className="text-center">
      <h1 className=" font-semibold text-3xl md:text-5xl text-white leading-[48px]">
        {numberText}+
      </h1>
      <h2 className="font-semibold text-2xl md:text-3xl text-[#EEF2F6] leading-[32px]">
        {text}
      </h2>
    </div>
  );
};
const TopBanner = () => {
  return (
    <section className="px-8 md:px-32 bg-[#155EEF] text-white py-[48px] grid grid-cols-1 md:grid-cols-3 gap-16">
      <TopBannerSection numberText={15} text="Technologies" />
      <TopBannerSection numberText={5} text="Real world projects" />
      <TopBannerSection numberText={2} text="Years of experience" />
    </section>
  );
};

export default TopBanner;
