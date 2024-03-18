import React from "react";
import CourseCardComponent from "./components/Main/CourseCardComponent";
import HeroComponent from "./components/Header/HeroComponent";
import ContentCardComponent from "./components/Main/ContentCardComponent";

export default function Home() {
  return (
    <>
    <HeroComponent></HeroComponent>
    <main className="container mx-auto border-b-gray-400">
      <section className="mt-10">
      <h1 className="flex text-4xl font-extrabold mb-5">COURSES</h1>
      <CourseCardComponent/>
      </section>
      <section className="my-10">
      <h1 className="flex text-4xl font-black mb-5">USEFUL CONTENTS</h1>
      <ContentCardComponent/>
      </section>
    </main>
    </>
  );
}
