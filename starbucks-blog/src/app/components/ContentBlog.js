'use client';

import { useState } from "react";
import Image from "next/image";

const posts = [
    { id: 1, title: "Bolo de Chocolate", date: "2025-02-09", image: "/bolo.jpg", category: "Sobremesas" },
    { id: 2, title: "Lasanha de Frango", date: "2025-02-08", image: "/lasanha.jpg", category: "Massas" },
    { id: 3, title: "Torta de Limão", date: "2025-02-07", image: "/torta.jpg", category: "Sobremesas" },
    { id: 4, title: "Hambúrguer Artesanal", date: "2025-02-06", image: "/hamburguer.jpg", category: "Lanches" },
];
const categories = ["Todas", "Sobremesas", "Massas", "Lanches"];
const postsPerPage = 2;

const ContentBlog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const filteredPosts = posts.filter(
        (post) =>
            (selectedCategory === "Todas" || post.category === selectedCategory) &&
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <section className="bg-neutral-200 w-full p-4 text-black">
            <h1 className="text-3xl font-bold mb-4">Blog de Receitas</h1>

            <input
                type="text"
                placeholder="Buscar receita..."
                className="w-full p-2 border rounded mb-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="flex gap-2 mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 border rounded ${selectedCategory === category ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-4">
                {paginatedPosts.map((post) => (
                    <div key={post.id} className="border rounded p-4 flex gap-4">
                        <Image src={post.image} alt={post.title} width={100} height={100} className="rounded" />
                        <div>
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p className="text-gray-500">{post.date}</p>
                            <p className="text-sm text-blue-500">{post.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                <button
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
            </div>
        </section>
    );
};

export default ContentBlog;