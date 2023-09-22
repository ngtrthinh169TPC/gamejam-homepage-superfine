import type { Game } from "~/frontend_test_homepage_data";

export const CardGame = (game: Game) => {
  return (
    <div className="h-72 rounded-2xl bg-slate-700">
      {game.thumbnailImageUrl ? (
        <img
          src={game.thumbnailImageUrl}
          alt={`jam-${game.name}-cover`}
          className="h-32 w-full rounded-2xl object-cover object-center"
        />
      ) : (
        <div className="h-32 w-full rounded-2xl bg-slate-600" />
      )}
      <div className="relative flex flex-col gap-2 px-4 py-2">
        <div>
          <h2 className="text-2xl font-bold tracking-wider">
            {game.name.toUpperCase()}
          </h2>
          <p className="text-purple-400">#{game.genre}</p>
        </div>
        <p>{game.description}</p>
        <div className="absolute right-4 top-3 rounded-full bg-slate-500 px-2 py-1 text-lg font-bold">
          ${game.price}
        </div>
      </div>
    </div>
  );
};
