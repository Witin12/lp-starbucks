'use client';

import { useState } from "react";
import Image from "next/image";

const posts = [
    { id: 1, title: "Café com Caramelo", date: "09/02/2025", description: "Espresso intenso combinado com leite vaporizado e um toque de calda de caramelo, resultando em uma bebida cremosa e levemente adocicada.", image: "/img/c1.jpg", category: "Bebidas" },
    { id: 2, title: "Café com Chocolate", date: "08/02/2025", description: "Mistura equilibrada de café espresso, leite vaporizado e calda de chocolate, criando um sabor rico e indulgente, finalizado com chantilly (opcional).", image: "/img/c2.jpg", category: "Bebidas" },
    { id: 3, title: "Café com Pistache", date: "05/02/2025", description: "Espresso encorpado harmonizado com leite vaporizado e xarope de pistache, proporcionando um sabor suave e levemente amanteigado.", image: "/img/c3.jpg", category: "Bebidas" },
    { id: 4, title: "Café Colombia", date: "01/02/2025", description: "Café 100% arábica de origem colombiana, com notas frutadas e acidez equilibrada, destacando-se pelo sabor suave e aromático.", image: "/img/cafeColombia.png", category: "Café" },
    { id: 5, title: "Café Verona", date: "22/01/2025", description: "Blend escuro e intenso, com notas de chocolate amargo, ideal para quem aprecia cafés encorpados e de torra mais profunda.", image: "/img/cafeVerona.png", category: "Café" },
    { id: 6, title: "Café em Cápsulas - Caramel Macchiato", date: "04/02/2025", description: "Espresso intenso misturado com leite vaporizado e um toque de calda de baunilha, finalizado com um fio de caramelo, trazendo um equilíbrio perfeito entre doçura e intensidade.", image: "/img/cafeCapsula.png", category: "Cápsulas" },
    { id: 7, title: "Café em Cápsulas - Cappuccino", date: "06/02/2025", description: "Combinação equilibrada de espresso encorpado e leite cremoso, resultando em uma bebida suave e aveludada, com uma espuma rica e sabor marcante.", image: "/img/cafeCapuccino.png", category: "Cápsulas" },
];
const categories = ["Todas", "Café", "Bebidas", "Cápsulas"];
const postsPerPage = 3;

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
        <section className="bg-neutral-100 w-full p-4 text-black">
            <h1 className="text-3xl font-bold mb-4">Blog de Receitas</h1>

            <input
                type="text"
                placeholder="Buscar receita"
                className="w-30 p-2 border rounded mb-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="flex gap-2 mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 border rounded ${selectedCategory === category ? "bg-green-800 text-white" : ""}`}
                        onClick={() => setSelectedCategory(category)} > {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-4">
                {paginatedPosts.map((post) => (
                    <div key={post.id} className="border rounded p-4 flex gap-4">
                        <Image src={post.image} alt={post.title} layout="responsive" width={100} height={100} className="max-w-[100px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-[150px] rounded object-cover" />
                        <div>
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p className="text-gray-500">{post.date}</p>
                            <p className="text-sm text-green-800">{post.category}</p>
                            <p className="text-gray-700">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                <button
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1} >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages} >
                    Próxima
                </button>
            </div>
        </section>
    );
};

export default ContentBlog;