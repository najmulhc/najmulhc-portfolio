"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { H1 } from "../../components/Typography/Typography";
import getTechnologies from "../../services/getTechnologies"; 
import postProject from '../../services/postProject'
import Select from "react-select";

const Page = async () => {
  const { handleSubmit, control, register, reset } = useForm();
  const [techStack, setTechStack] = React.useState([]);
  const [type, setType] = React.useState('');
 
  const handleInput = async (data) => { 
    const technologies = techStack.map((item) => item.value);
    const {date} = data;
    const  newDate = new Date(date).getTime();
   const result = await postProject({
     ...data,
     date: newDate,
     techStack: technologies,
     type: type.value,
   });
  };

  const { technologies } = await getTechnologies();
  const values = [];
  for (let item of technologies) {
    const newTech = {
      label: item.name,
      value: item.name,
    };
    values.push(newTech);
  }
  const types = ["Full Stack", "Frontend", "Backend", "CLI app"];
  const realTypes = []  ;
   for (let item of types) {
     const newTech = {
       label:item,
       value: item,
     };
     realTypes.push(newTech);
   }
  return (
    <main>
      <form
        onSubmit={handleSubmit(handleInput)}
        className="bg-white p-8 rounded shadow-md w-96 mx-auto"
      >
        <H1 classname="text-center mb-4">Add Project</H1>
        <label className="block mb-2 font-semibold text-gray-700">
          Project Name
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Link of logo
          <input
            type="text"
            {...register("logo", { required: true })}
            className="w-full p-2 border rounded mt-1"
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
          Tech Stack
          <Select
            value={techStack}
            options={values}
            className="w-full p-2 border rounded mt-1"
            isMulti
            required
            onChange={(e) => {
              setTechStack(e);
            }}
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Project type
          <Select
            value={type}
            options={realTypes}
            className="w-full p-2 border rounded mt-1"
          
            required
            onChange={(e) => {
              setType(e);
            }}
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Link of Github Repo
          <input
            type="text"
            {...register("repo", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Link of Live Site
          <input
            type="text"
            {...register("liveSite", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Date
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Screenshot
          <input
            type="text"
            {...register("screenshot", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <button type="submit"> submit</button>
      </form>
    </main>
  );
};

export default Page;
