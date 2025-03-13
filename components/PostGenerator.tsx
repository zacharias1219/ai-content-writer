"use client";

import { useState } from "react";
import { SparklesIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ReactFormState } from "react-dom/client";

const PostGenerator = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get("prompt") as string;

    if (!prompt) return;
    setLoading(true);
    try{
      const post = await generatePost(prompt)
    }catch(error){
      console.error("Error generating post",error);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div>
        <form className="relative" onSubmit={e=>handleSubmit}>
            <div className="h-40 rounded-2xl p-0.5 bg-gradient-to-br from-purple-500 to-pink-500">
                <div className="h-full w-full rounded-[13.5px] bg-gray-50">
                    <Textarea
                    name="prompt"
                    maxLength={500}
                    placeholder="Describe a topic you want to write about"
                    className="h-full text-sm md:text-base shadow-none border-none focus-visible:ring-0 focus-visible:outline-none resize-none lg:overflow-hidden"
                    />
                </div>
            </div>
            <Button
              type="submit"
              className="hidden lg:flex absolute right-4 bottom-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 px-10 py-5 hover:opacity-90 transition-opacity"
            >
              <SparklesIcon className="size-4 fill-current" /> Create Idea
            </Button>
            <Button
              type="submit"
              size="icon"
              className="lg:hidden absolute right-2 bottom-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <SparklesIcon className="size-3 fill-current" />
            </Button>
        </form>
    </div>
  )
}

export default PostGenerator;