
import React from "react";
import Card from "./coponents/CIN_Card.js";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-white-50 font-poppins dark:bg-zinc">
      <Hero />

      {/* Our Community in numbers */}
      <section
        id="our-community"
        className="flex w-full flex-col items-center px-6 py-16"
      >
        <h2 className="text-center text-[40px] font-bold text-purple">
          Our community in numbers
        </h2>

        <p className="mb-12 mt-4 text-center text-2xl text-lightpurple">
          A community built by ARMYs for ARMYs around the world.
        </p>

        <div className="grid w-full max-w-[1048px] grid-cols-1 gap-4 sm:grid-cols-2">
          <Card
            icon_path="/globe.svg"
            head="Globe"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          />

          <Card
            icon_path="/users.svg"
            head="Users"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          />

          <Card
            icon_path="/calendar.svg"
            head="Calendar"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          />

          <Card
            icon_path="/graph.svg"
            head="Graph"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
        </div>
      </section>

      {/* Future homepage sections go here */}
    </div>
  );
}
