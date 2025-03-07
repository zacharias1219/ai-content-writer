import Link from "next/link"
import { SearchIcon, EditIcon, Loader2Icon } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const AuthHeader = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return ;
  return (
    <header className="p-4 flex items-center justify-between text-sm font-medium w-full">
        <div className="flex items-center gap-5">
            <Link href="/">
                <h1 className="text-2xl lg:text-4xl font-serif font-bold">
                    Scribe
                </h1>
            </Link>
            <div className="hidden md:flex">{/* SearchBar */}</div>
        </div>

        <div className="flex items-center gap-8">
            <Link href="/search" className="flex md:hidden">
                <SearchIcon className="size-6 text-muted-foreground"/>
            </Link>

            <Link href="/new-post" className="flex items-center space-x-2 text-muted-foreground hover:text-black transition-colors">
                <EditIcon className="size-5"/>
                <span>Write</span>
            </Link>

            <ClerkLoading>
                <Loader2Icon className="size-8 animate-spin"/>
            </ClerkLoading>

            <ClerkLoaded>
                <UserButton/>
            </ClerkLoaded>
        </div>
    </header>
  )
}

export default AuthHeader;