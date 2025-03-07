import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='p-4 flex items-center justify-between text-sm font-medium max-w-6xl mx-auto w-full'>
        <Link href='/'>
            <h1 className='text-2xl lg:text-4xl font-serif font-bold'>
                Scribe
            </h1>
        </Link>

        <div className='flex items-center gap-8'>
            <Link href='/new-post' className='text-muted-foreground hover:text-black'>
                Write
            </Link>
            <ClerkLoading>
                <Loader2Icon className='size-8 animate-spin'/>
            </ClerkLoading>

            <ClerkLoaded>
                <SignInButton/>
                <Button asChild className='text-sm px-4 py-3 rounded-full '>
                    <SignUpButton/>
                </Button>
            </ClerkLoaded>
        </div>
    </header>
  )
}
