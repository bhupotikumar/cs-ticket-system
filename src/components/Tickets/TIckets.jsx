import { Suspense, useEffect } from 'react';
import TicketCard from './TicketCard';
import Loading from '../Loading/Loading';

const Tickets = ({ handleTicket, tickets, setTickets }) => {

    useEffect(() => {
        const fetchTickets = async () => {
            const res = await fetch('./tickets.json');
            const data = await res.json();
            setTickets(data);
        };
        fetchTickets();
    }, [setTickets]);


    return (
        <div>
            <h1 className='text-2xl text-center md:text-left font-semibold'>Customer Tickets</h1>
            <Suspense fallback={<Loading />}>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {tickets.map(ticket => {
                        return <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            onClick={handleTicket}
                        />
                    })}
                </div>
            </Suspense>
        </div>
    );
};

export default Tickets;