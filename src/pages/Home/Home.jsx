import React from 'react';
import Banner from '../../components/Banner/Banner';
import TIckets from '../../components/Tickets/TIckets';

const Home = () => {
    return (
        <div className="my-12 w-11/12 min-h-[50vh] mx-auto">
            <Banner />
            <main className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="col-span-3">
                    <TIckets />
                </div>

            </main>
        </div>
    );
};

export default Home;