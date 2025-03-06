import Header from "@/components/Header";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col h-screen min-h-screen bg-gray-50">

        <SignedIn>{/* AuthHeader */}</SignedIn>

        <SignedOut>
            <Header/>
        </SignedOut>

        <main className="flex-1 w-full p-4 max-w-6xl mx-auto">{children}</main>
      </div>
    );
  }