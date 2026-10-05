import Card from "../componets/Card";

export default function Menu() {
    return (
        <div className="flex flex-col">
            <div class="mask-b-from-80% mask-b-to-100% bg-[url(/banner.jpg)] w-full pb-10">
                <div className="título flex flex-col items-center pt-5">
                    <h1 className="font-playfair text-5xl font-bold text-white">Cardápio</h1>
                    <p className="text-white">Domingo, 4 de Outubro</p>
                </div>
            </div>


            <div className="menu p-5">

                <div className="mb-5">
                    <h1 className="font-playfair text-2xl p-5 font-bold">Café da manhâ -- 9h30</h1>
                    <hr className="border-gray-300" />
                    <div className="container grid grid-cols-3 p-5 gap-5">

                        <div className="card1 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/panqueca.jpg" alt="Panqueca" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Panqueca</h3>
                                <p className="text-gray-600">Deliciosa panqueca com recheio de frutas e creme</p>
                                <p className="text-xl font-bold">R$ 24,00</p>
                            </div>
                        </div>

                        <div className="card2 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/crepe.jpg" alt="crepe" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Crepe</h3>
                                <p className="text-gray-600">Deliciosa crepe com recheio de frutas e creme</p>
                                <p className="text-xl font-bold">R$ 15,90</p>
                            </div>
                        </div>

                        <div className="card3 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/cafe-expresso.jpg" alt="Café Expresso" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Café Expresso</h3>
                                <p className="text-gray-600">Delicioso café expresso com leite</p>
                                <p className="text-xl font-bold">R$ 5,90</p>
                            </div>
                        </div>

                        <div className="card4 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/cafe-preto.jpg" alt="Café Preto" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Café Preto</h3>
                                <p className="text-gray-600">Delicioso café preto quente</p>
                                <p className="text-xl font-bold">R$ 4,90</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <h1 className="font-playfair text-2xl p-5 font-bold">Almoço -- 12h</h1>
                    <hr className="border-gray-300" />
                    <div className="container grid grid-cols-3 p-5 gap-5">
                        <Card />

                        <div className="card5 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/macarrao.jpg" alt="Macarrão" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Macarrão</h3>
                                <p className="text-gray-600">Delicioso macarrão com queijo e carne</p>
                                <p className="text-xl font-bold">R$ 30,90</p>
                            </div>
                        </div>

                        <div className="card6 bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
                            <div className="img">
                                <img src="/nhoque.jpg" alt="Nhoque" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-bold">Nhoque</h3>
                                <p className="text-gray-600">Delicioso nhoque com queijo e carne</p>
                                <p className="text-xl font-bold">R$ 25,00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}