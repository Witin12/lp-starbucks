'use client';
import React, { useState } from 'react';

const ContentGridSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full bg-white">
            {/* Card 1 */}
            <div className="flex flex-col justify-between">
                <div className="p-16">
                    <div className="h-5 w-28 bg-green-800 mb-4"></div>
                    <h3 className="text-5xl font-bold text-black">Quatro Bebidas, Um Milhão De Razões</h3>
                    <p className="mt-2 text-black italic">"Apenas ame a si mesmo e pronto." - Lady Gaga</p>
                    <p className="mt-4 text-black leading-7 text-justify max-w-lg">
                        Lady Gaga e a Starbucks compartilham uma missão: construir um mundo mais amável e corajoso.
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-6 py-2 text-sm text-black border border-black rounded hover:bg-black hover:text-white">
                        Saber mais
                    </button>
                </div>
                <img src="/img/f2.jpg" alt="Copos da Starbucks formando nome Gaga" className="w-full h-1/2 object-cover" />
            </div>


            {/* Card 2 */}
            <div>
                <img src="/img/f1.jpg" alt="Pessoa com Copo da Starbucks" className="w-full h-full object-cover" />
            </div>

            {/* Card 3 */}
            <div>
                <img src="/img/f3.jpg" alt="Copo da Starbucks" className="w-full h-full object-cover" />
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between">
                <div className="p-16">
                    <div className="h-5 w-28 bg-green-800 mb-4"></div>
                    <h3 className="text-5xl font-bold text-black">Apresentando Vanilla Sweet <span className="block">Cream Cold Brew - Doce, </span><span className="block"> Cremoso, Frio, Ousado.</span></h3>
                    <p className="mt-4 text-black leading-7 text-justify max-w-lg">
                        Pouco antes de servir, nosso café Starbucks® Cold Brew de mistura lenta e personalizada é coberto com um delicado creme de baunilha doce feito em casa que se espalha por toda a xícara.
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-6 py-2 text-sm text-black border border-black rounded hover:bg-black hover:text-white">
                        Saber mais
                    </button>
                </div>
                <img src="/img/f4.jpg" alt="Copos da Starbucks formando nome Gaga" className="w-full h-1/2 object-cover" />
            </div>

            {/* Card 5 */}
            <div className="flex flex-col justify-center items-center h-full bg-cover" style={{ backgroundImage: "url('/img/bg2.jpg')" }}>
                <div className="p-16">
                    <h3 className="text-5xl font-bold text-black">
                        Chegou O Novo Ultra Caramel Frappuccino!
                    </h3>
                    <p className="mt-4 text-black leading-7 text-justify max-w-lg">
                        Parabéns por fazer isso! Isso exige caramelo. Muitos disso. Com creme de leite fresco. Chegou o novo Ultra Caramel Frappuccino!
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-6 py-2 text-sm text-black border border-black rounded hover:bg-black hover:text-white">
                        Saber mais
                    </button>
                </div>
            </div>

            {/* Card 6 */}
            <div>
                <img src="/img/f5.jpg" alt="Copo da Starbucks" className="w-full h-full object-cover" />
            </div>

            {/* Card 7 */}
            <div className="flex flex-col justify-between bg-gray-200">
                <div className="p-16">
                    <div className="h-5 w-28 bg-green-800 mb-4"></div>
                    <h3 className="text-5xl font-bold text-black">A Bondade Começa <span className="block">Com Uma Xícara</span></h3>
                    <p className="mt-4 text-black leading-7 text-justify max-w-lg">
                        Apresentando a coleção Cups Of Kindness: Quatro drinks muito especiais tão deliciosos e refrescantes quanto lindos.
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-6 py-2 text-sm text-black border border-black rounded hover:bg-black hover:text-white">
                        Saber mais
                    </button>
                </div>
            </div>

            {/* Card 8 */}
            <div>
                <img src="/img/bg3.jpg" alt="Copo da Starbucks" className="w-full h-full object-cover" />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full">
                        <h2 className="text-xl font-bold text-black">Lorem Ipsum</h2>
                        <p className="mt-4 text-black leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nunc sit amet suscipit malesuada, ligula purus vehicula purus, id pharetra lectus purus ac lorem. Sed tristique velit ut orci fermentum, vel dictum lectus vulputate.
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-6 px-6 py-2 text-sm text-white bg-black rounded hover:bg-gray-700">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContentGridSection;
