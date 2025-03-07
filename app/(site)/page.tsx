import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const  user  = await currentUser();

    if (!user) return <LandingPage/>;
    return (
        <div className="container">
            Hello
        </div>
    );
}