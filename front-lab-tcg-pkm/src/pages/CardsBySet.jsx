import { Link } from '../components/Link';
import { CardsBySetList } from '../components/CardsBySetList/CardsBySetList';

export default function CardsBySet({routeParams}) {
    return (
        <>
        <div>
            <div className='container mx-auto p-4'>
                <h1 className='text-center text-3xl font-bold mb-6'>Cartas del Set</h1>
                <CardsBySetList routeParams={{ setCode: routeParams }} />
            </div>
            <div className="container mx-auto p-4">
                <Link
                    to="/"
                    alt="Volver al Home"
                    className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-500 transition"
                >
                    Sets
                </Link>
            </div>
        </div>
        </>
    );
}

