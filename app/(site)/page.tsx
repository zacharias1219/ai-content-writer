import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";
import { saveNewUser } from "@/services/userServices";

export default async function Home() {
    const  user  = await currentUser();

    if (!user) return <LandingPage/>;

    await saveNewUser(user);
    return (
        <div className="container">
            Hello
        </div>
    );
}