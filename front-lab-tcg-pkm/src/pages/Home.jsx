import { SetsList } from '../components/SetList/SetList';

export default function SetList() {
    return (
        <>
        <div>
            <div className='container mx-auto p-4'>
                <h1 className='text-center text-3xl font-bold mb-6'>Pokémon Card Sets</h1>
                <SetsList />
            </div>
        </div>
        </>
    );
}
