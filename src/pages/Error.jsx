import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-[#95ff00] text-6xl font-bold">404</h2>
      <p className="text-2xl font-semibold mb-2 text-white">OPS! pagina não encontrada</p>
      <p className="text-white py-3 px-20 bg-black rounded-2xl">parece que a pagina que esta encontrando esta indidsponivel</p>
    </main>
  )
}

export default Error
