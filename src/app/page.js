import React from "react";
import CourseCardComponent from "./components/Main/CourseCardComponent";

export default function Home() {
  return (
    <main className="container mx-auto border-b-gray-400">
      <section className="mt-10">
      <h1 className="flex text-4xl font-extrabold mb-5">COURSES</h1>
      <CourseCardComponent/>
      </section>
      <section className="mt-10">
      <h1 className="flex text-4xl font-extrabold mb-5">USEFUL CONTENTS</h1>
      <CourseCardComponent/>
      </section>
    </main>
  );
}
