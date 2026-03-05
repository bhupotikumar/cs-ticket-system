import React from 'react';
import TicketCard from './TicketCard';

const TIckets = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Customer Tickets</h1>
            <div className="mt-2 grid grid-cols-2 gap-4">
                {/* Cards here */}
                <TicketCard />
            </div>
        </div>
    );
};

export default TIckets;