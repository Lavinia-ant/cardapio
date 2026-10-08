export default function Card() {
    return (
        <div className="card bg-gray-100 pb-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105">
            <div className="img">
                <img src="" alt="Lasagna Frita Grande" className="w-full h-48 object-cover rounded-t-2xl rounded-top shadow-xl mb-4 mt-0" />
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold">nome</h3>
                <p className="text-gray-600">descrição</p>
                <p className="text-xl font-bold">preço</p>
            </div>
        </div>
    )
}