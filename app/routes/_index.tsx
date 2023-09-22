import type { MetaFunction } from "@remix-run/node";
import { CardGame } from "~/components/CardGame";
import { CardJam } from "~/components/CardJam";
import { FirstJam } from "~/components/FirstJam";
import { Navbar } from "~/components/Navbar";
import { allData } from "~/frontend_test_homepage_data";

export const meta: MetaFunction = () => [{ title: "GameJam" }];

export default function Index() {
  return (
    <main className="relative flex min-h-screen flex-col bg-slate-800 pb-16 text-slate-300">
      <Navbar />
      <div className="flex flex-col gap-12 pt-12 sm:gap-16">
        <div className="flex flex-col gap-6">
          <div className="relative hidden justify-end px-16 sm:flex">
            <input
              className="rounded-2xl bg-slate-700 px-4 py-2"
              placeholder="Search"
            />
            <button className="absolute right-[74px] top-[6px] h-7 w-7 rounded-full bg-slate-400 duration-200 ease-out hover:bg-purple-300"></button>
          </div>
          <FirstJam {...allData.jams[0]} />
        </div>
        <div className="w-full px-4 sm:px-16">
          <h2 className="pb-6 pl-4 text-xl font-medium tracking-wide">
            FEATURED JAMS
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {allData.featuredJams.map((jam) => {
              return <CardJam key={`card-jam-${jam.name}`} {...jam} />;
            })}
          </div>
          <div className="flex justify-end pt-4">
            <button className="rounded-full border-2 border-slate-500 px-2 py-1 duration-200 ease-out hover:bg-slate-700">
              VIEW MORE
            </button>
          </div>
        </div>
        <div className="w-full flex-col px-4 sm:px-16">
          <h2 className="pb-6 pl-4 text-xl font-medium tracking-wide">
            FEATURED GAMES
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {allData.games.map((game) => {
              return <CardGame key={`card-game-${game.name}`} {...game} />;
            })}
          </div>
          <div className="flex justify-end pt-4">
            <button className="rounded-full border-2 border-slate-500 px-2 py-1 duration-200 ease-out hover:bg-slate-700">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
