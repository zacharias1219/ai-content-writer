import {User as TypeUser} from '@clerk/nextjs/server';
import {connectToDatabase} from '@/lib/mongodb';

export async function saveNewUser(user: TypeUser) {
    await connectToDatabase()

    let existingUser = await User.findOne({
        email: user.primaryEmailAddress?.emailAddress
    })


    if (!existingUser) {
        existingUser = new User({
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
            profilePicture: user.imageUrl || ""
        })

        await existingUser.save()
    }
}