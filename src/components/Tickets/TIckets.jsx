import { use } from 'react';
import TicketCard from './TicketCard';

const ticketPromise = fetch('./tickets.json')
    .then(res => res.json());


const Tickets = () => {
    const tickets = use(ticketPromise);

    return (
        <div>
            <h1 className='text-2xl text-center md:text-left font-semibold'>Customer Tickets</h1>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {tickets.map(ticket => {
                    return <TicketCard key={ticket.id} ticket={ticket} />
                })}

            </div>
        </div>
    );
};

export default Tickets;