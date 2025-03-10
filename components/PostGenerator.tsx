"use client";

import { Textarea } from "./ui/textarea";

const PostGenerator = () => {
  return (
    <div>
        <form className="relative">
            <div className="h-40 rounded-2xl p-0.5 bg-gradient-to-br from-purple-500 to-pink-500">
                <div className="h-full w-full rounded-[13.5px] bg-gray-50">
                    <Textarea
                    name="prompt"
                    maxLength={500}
                    placeholder="Describe a topic youu want to write about"
                    className="h-full text-sm md:text-base shadow-none border-none focus-visible:ring-0 focus-visible:outline-none resize-none lg:overflow-hidden"
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default PostGenerator;