import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";

async function Header() {
  const session = await getServerSession(authOptions);
  

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-slate-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* language */}

          {session ? (
            <>
              <Link href={"/chat"} prefetch={false} className="border p-1.5 rounded">
                <MessagesSquareIcon  className="text-black dark:text-white "/>
              </Link>
            </>
          ):(
            <Link href='/pricing'>
              Pricing
            </Link>
          )}

          {/* Darkmode toggle */}
          <DarkModeToggle />
          <UserButton  session={session}/>
        </div>
      </nav>

      {/* upgrade */}
    </header>
  );
}

export default Header;
