import React from 'react';
import Card from './coponents/CIN_Card.js';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white-50 font-poppins dark:bg-zinc">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-emerald-500 sm:items-start">
        <p>hi</p>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            HELLO HOMEPAGE
          </h1>
        </div>
        <div className="w-full flex justify-center">
      
        </div>
        </main>
          <h1 className="font-bold text-purple text-[40px]">Lorem ipsum dolor sit amet</h1>
          <h2 className="text-lightpurple text-2xl mb-22">Lorem ipsum dolor sit amet </h2>
          <div className="w-[75%] max-w-[1048px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card icon_path={"/globe.svg"} head={"Globe"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}></Card>
            <Card icon_path={"/users.svg"} head={"Users"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}></Card>
            <Card icon_path={"/calendar.svg"} head={"Calendar"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}></Card>
            <Card icon_path={"/graph.svg"} head={"Graph"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}></Card>
          </div>
    </div>
  );
}

