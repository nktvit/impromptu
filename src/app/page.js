'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react";
import Utils from "@/src/utils";
import deepai from "deepai";
deepai.setApiKey('20079ef0-ed8b-4884-a2a6-7601a4045cc5');

export default function Home() {
    const [imagePrompt, setImagePrompt] = useState(null);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const generateImagePreview = async () => {
            try {
                setIsLoading(true)
                const prompt = Utils.generateSentence();
                setImagePrompt(prompt);

                const response = await deepai.callStandardApi('cute-creature-generator', {
                    text: prompt,
                });

                setImage(response.output_url);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false)
            }
        };

        generateImagePreview();
    }, []);


  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-50">
          <div className="z-20 w-full max-w-5xl p-8 bg-white shadow-xl rounded-xl">
              <div className="grid lg:grid-cols-2 gap-12">
                  <div className="flex justify-center items-center">
                      {image && (
                          <Image className="block rounded-lg" src={image} alt={imagePrompt} width={500} height={500} priority/>
                      )}
                      {isLoading && (
                          <div className="bg-yellow-200 relative items-center block">
                              <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                  <span className="sr-only">Loading...</span>
                              </div>
                          </div>
                      )}
                  </div>

                  <div className="space-y-8">
                      <div className="p-5 bg-gray-100 rounded-lg">
                          <h2 className="text-lg text-gray-700 font-semibold mb-3">Prompt</h2>
                          <p className="text-gray-500">{imagePrompt}</p>
                      </div>

                      <h1 className="text-3xl text-gray-800 font-bold mb-2">Start prompting by yourself!</h1>
                      <Link href="/prompt" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors">
                          Get Started
                      </Link>
                  </div>
              </div>

              <div className="mt-12 text-center lg:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to <span className="text-gradient bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-red-500">Impromptu!</span></h1>
                  <h2 className="text-xl text-gray-600">A platform that allows users to generate custom-designed t-shirts based on prompts they provide.</h2>
              </div>
          </div>
      </main>
  )
}
