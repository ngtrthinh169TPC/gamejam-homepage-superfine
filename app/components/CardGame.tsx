import type { Game } from "~/frontend_test_homepage_data";

export const CardGame = (game: Game) => {
  return (
    <div className="h-60 rounded-2xl bg-slate-500">
      {game.thumbnailImageUrl ? (
        <img
          src={game.thumbnailImageUrl}
          alt={`jam-${game.name}-cover`}
          className="h-32 w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="h-32 w-full rounded-2xl bg-slate-400" />
      )}
      <div className="relative">
        <h2>{game.name.toUpperCase()}</h2>
        <p>#{game.genre}</p>
        <p>{game.description}</p>
        <p className="absolute right-0 top-0">{game.price}$</p>
      </div>
    </div>
  );
};
