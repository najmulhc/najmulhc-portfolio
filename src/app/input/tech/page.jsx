"use client";
import { useForm } from "react-hook-form";
import { H1 } from "../../components/Typography/Typography";
import Select from "react-select";
import React from "react";
import postTechnology from "../../services/postTechnology";

const techTypes = [
  { label: "Frontend Library", value: "Frontend Library" },
  { label: "Backend Library", value: "Backend Library" },
  { label: "Web Language", value: "Web Language" },
  { label: "Programming Language", value: "Programming Language" },
  { label: "CSS Framework", value: "CSS Framework" },
  { label: "Full Stack Framework", value: "Full Stack Framework" },
  { label: "Developer Tool", value: "Developer Tool" },
  { label: "Design Tool", value: "Design Tool" },
];
const Page = () => {
  const { handleSubmit, control, register, reset } = useForm();
  const [type, setType] = React.useState("");
  

  const handleInput = async (data) => {
    const { time, name, darkLogo, lightLogo, description, isFeatured } = data;
    console.log(isFeatured)
    const timeOfLearning = new Date(time).getTime();
    const newTech = {
      type,
      timeOfLearning,
      name,
      darkLogo,
      lightLogo,
      description,
      
    };
    const result =  await postTechnology(newTech);
    console.log(result)
    reset();``
  };
  return (
    <main>
      <form
        onSubmit={handleSubmit(handleInput)}
        className="bg-white p-8 rounded shadow-md w-96 mx-auto"
      >
        <H1 classname="text-center mb-4">Add Technology</H1>
        <label className="block mb-2 font-semibold text-gray-700">
          Technology Name
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Type of Technology
          <Select
            className="w-full p-2 border rounded mt-1"
            options={techTypes}
            onChange={(e) => {
              setType(e.value);
            }}
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Light Logo Link
          <input
            type="text"
            {...register("lightLogo", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Dark Logo Link
          <input
            type="text"
            {...register("darkLogo", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Featured Technology
          <input
            type="checkbox"
            {...register("isFeatured", {})}
            className="ml-2 mt-1"  
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Description:
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Date of learning
          <input
            type="date"
            {...register("time", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Page;
