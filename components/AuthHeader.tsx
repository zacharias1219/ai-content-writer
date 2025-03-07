import Link from "next/link"

const AuthHeader = () => {
  return (
    <header className="p-4 flex items-center justify-between text-sm font-medium w-full">
        <div className="flex items-center gap-5">
            <Link href="/">
                <h1 className="text-2xl lg:text-4xl font-serif font-bold">
                    Scribe
                </h1>
            </Link>
        </div>
    </header>
  )
}

export default AuthHeader;