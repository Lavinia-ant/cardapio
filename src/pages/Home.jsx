import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center">
                <div className="título flex flex-col items-center mt-50 mb-5">
                    <h1 className="font-playfair text-5xl font-bold text-orange-300">Pasta Restaurante</h1>
                    <p className="text-gray-600">Confira nosso cardápio para hoje!</p>
                </div>

                <button className="bg-gradient-to-r from-green-700 to-green-500 rounded-full py-2 px-10 shadow-xl text-white hover:bg-gradient-to-r hover:from-green-900 hover:to-green-900 transition duration-300">
                    <Link to="/cardapio">cardápio</Link>
                </button>
            
        </div>
    )
}