"use client";
import { useForm } from "react-hook-form";
import { H1 } from "../../components/Typography/Typography";
import postEducation from "../../services/postEducation";
import { useState } from "react";
import Select from "react-select";

const educationTypes = [
  {
    label:"Formal Education", value: "Formal Education"
  },{
    label: "Coding Bootcamp", value: "Coding Bootcamp"
  }, {
    label: "Online Course", value: "Online Course"
  }
]

const EducationForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [type, setType] = useState("");

  const onSubmit = async (data) => {
    const { start, end } = data;
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    await postEducation({
      ...data,
      start: startDate,
      end: endDate, type
    });
    reset();
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <H1 classname="text-center mb-4">Add Education</H1>
        <label className="block mb-2 font-semibold text-gray-700">
          Institute:
          <input
            type="text"
            {...register("institute", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Logo of Inistitute:
          <input
            type="text"
            {...register("logo", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Type of Education:
          <Select
            options={educationTypes}
            onChange={(e) => {
              setType(e.value);
            }}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Course:
          <input
            {...register("course", { required: true })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          Start Date (Year):
          <input
            type="date"
            {...register("start", {
              required: true,
            })}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2 font-semibold text-gray-700">
          End Date (Year):
          <input
            type="date"
            {...register("end", { required: true })}
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
          Certificate Link:
          <input
            {...register("certificate")}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default EducationForm;
