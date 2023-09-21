import type { MetaFunction } from "@remix-run/node";
import { CardGame } from "~/components/CardGame";
import { CardJam } from "~/components/CardJam";
import { FirstJam } from "~/components/FirstJam";
import { Navbar } from "~/components/Navbar";
import { allData } from "~/frontend_test_homepage_data";

export const meta: MetaFunction = () => [{ title: "Gamejam" }];

export default function Index() {
  return (
    <main className="relative flex min-h-screen flex-col gap-16 bg-slate-800 pb-16 text-slate-100">
      <Navbar />
      <div className="flex flex-col gap-8">
        <div className="flex justify-end">
          <input placeholder="Search" />
        </div>
        <FirstJam {...allData.jams[0]} />
      </div>
      <div className="flex w-full flex-col gap-4 px-4 sm:px-16">
        <h2>FEATURED JAMS</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {allData.featuredJams.map((jam) => {
            return <CardJam key={`card-jam-${jam.name}`} {...jam} />;
          })}
        </div>
        <div className="flex justify-end">
          <button className="">VIEW MORE</button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 px-4 sm:px-16">
        <h2>FEATURED GAMES</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {allData.games.map((game) => {
            return <CardGame key={`card-game-${game.name}`} {...game} />;
          })}
        </div>
        <div className="flex justify-end">
          <button className="">VIEW MORE</button>
        </div>
      </div>
    </main>
  );
}
