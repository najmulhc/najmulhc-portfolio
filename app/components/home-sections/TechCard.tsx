import Button from "../Button";
import NextJs from "../Logos/NextJs";

export default function TechCard( ){
    return (
      <div className="flex flex-col items-center text-center border border-[#eeeeef] p-4 rounded-md ">
        <NextJs fill="#eeeeef" width="6rem" />
        <br />
        <div className="flex flex-col items-center gap-2 ">
          <h2 className="text-[#eeeeef] text-2xl font-semibold">Next.js</h2>
          <p className="px-2 bg-[#eeeeef] text-[.75rem]  text-none rounded-full ">
            Full stack
          </p>
          <p className="text-[#eeeeef] font-normal text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            quos eos fuga aspernatur distinctio corporis quas nulla? Vero
            numquam debitis aliquid velit, est at nobis magni quae molestias
            voluptatibus sequi!
          </p>
          <Button>
            See Projects on Next.js
          </Button>
        </div>
      </div>
    );
}