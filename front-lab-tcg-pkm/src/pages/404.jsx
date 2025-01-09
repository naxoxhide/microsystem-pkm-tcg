import { Link } from '../components/Link';
import gengar404 from '../img/gengar404.gif';

export default function Page404() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-6">404</h1>
      <div className="flex flex-col items-center">
        <img
          src={gengar404}
          alt="Gif gengar error 404"
          className="mb-6"
        />
        <p className="text-center text-2xl font-semibold">
          Lo Siento! Gengar ha desconectado la máquina
        </p>
      </div>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-500 transition"
      >
        Volver al Home
      </Link>
    </div>
  );
}
