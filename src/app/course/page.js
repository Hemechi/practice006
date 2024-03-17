import React from "react";
import CourseCardComponent from "../components/Main/CourseCardComponent";

export default function Course() {
  return (
    <main className="container mx-auto border-b-gray-400">
      <section className="my-10">
      <h1 className="flex text-4xl font-extrabold mb-5">COURSES</h1>
      <CourseCardComponent/>
      </section>
    </main>
  );
}
