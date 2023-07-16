'use client'
import Product from "@/src/components/product";
import { useCallback, useEffect, useRef, useState } from "react";
import deepai from "deepai";
deepai.setApiKey('20079ef0-ed8b-4884-a2a6-7601a4045cc5');

export default function PromptPage() {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState(null);
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const productCounter = useRef(0);

    const generateProduct = useCallback(async () => {
        try {
            setIsLoading(true);

            const response = await deepai.callStandardApi("cute-creature-generator", {
                text: prompt,
            });

            setImage(response.output_url);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const loadMoreProducts = useCallback(async () => {
        if (!isLoading) {
            try {
                setIsLoading(true);

                const response = await deepai.callStandardApi("cute-creature-generator", {
                    text: prompt,
                });

                const newProduct = {
                    id: productCounter.current,
                    image: response.output_url,
                };

                setProducts((prevProducts) => [...prevProducts, newProduct]);
                productCounter.current++;
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [isLoading, prompt]);

    useEffect(() => {
        if (showProducts) {
            loadMoreProducts();
        }
    }, [loadMoreProducts, showProducts]);

    const handleInput = (input) => {
        setPrompt(input);
    };

    const handleButton = () => {
        setShowProducts(true);
        generateProduct();
    };

    return (
        <div className="min-h-screen bg-slate-800 py-20">
            <div className="container mx-auto px-4">
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold text-gray-700 mb-4">Prompt</h1>
                    <div className="w-full flex justify-stretch gap-x-4">
                        <input
                            onInput={(e) => handleInput(e.target.value)}
                            type="text"
                            className="flex-grow px-3 py-2 text-gray-700 bg-gray-200 rounded-md outline-none"
                            placeholder="Enter your prompt here..."
                        />
                        <button
                            onClick={handleButton}
                            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
                        >
                            Prompt
                        </button>
                    </div>
                </div>

                {showProducts && (
                    <div className="grid lg:grid-cols-3 gap-6 mt-8">
                        {products.map((product, index) => (
                            <Product
                                key={product.id}
                                imageUrl={product.image}
                                isLoading={isLoading && index === products.length - 1}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}