import Button from "../Button";

export default function Hero() {
  return (
    <section className="max-w-full">
      <section className="grid grid-flow-row-dense  grid-cols-2 px-12 py-20">
        <div className="text-[#eeeeef]  col-span-2 md:col-span-1 order-2 md:order-1 flex flex-col justify-center items-start text-center md:text-left ">
          <h1 className="text-4xl font-bold mt-8 md:mt-0">
            I am <span className="text-[#FFD700]">Sikder MD. NZmu</span>
          </h1>
          <h3 className="text-lg font-normal opacity-70">
            Meta certified professional <span>Frontend Web Developer</span>
          </h3>
          <Button className="mt-4 mx-auto md:mx-0">Download Resume</Button>
        </div>
        <div className="flex justify-center items-center col-span-2 md:col-span-1 order-1 md:order-2">
          <img
            src="https://www.theclickcommunity.com/blog/wp-content/uploads/2017/01/portrait-of-boy-in-a-red-and-black-shirt-by-Kristin-Dokoza-840x560.jpg"
            alt="My image"
            width={360}
            height={480}
          />
        </div>
      </section>
    </section>
  );
}
