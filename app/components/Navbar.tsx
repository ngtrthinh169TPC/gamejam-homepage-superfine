export const Navbar = () => {
  return (
    <div className="flex w-full gap-8 bg-slate-700 px-8">
      <div className="h-12 w-32 bg-slate-300">Logo</div>
      <div className="hidden w-full items-center justify-between sm:flex">
        <div>BROWSE GAMES</div>
        <ul className="flex gap-16">
          <li>UPLOAD GAME</li>
          <li>COMMUNITY</li>
          <li>SUPPORT</li>
        </ul>
        <ul className="flex gap-16">
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
};
