import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-slate-950 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex item-center justify-end space-x-4">
          {/* language */}

          {/* Session &&{
            ...
          } */}

          {/* Darkmode toggle */}
          <DarkModeToggle/>
          <UserButton/>

        </div>
      </nav>

      {/* upgrade */}
    </header>
  );
};

export default Header;
