import { Suspense, useEffect, useState } from 'react';
import TicketCard from './TicketCard';
import Loading from '../Loading/Loading';

const Tickets = ({ handleTicket, tickets, setTickets }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            setLoading(true);
            try {
                const res = await fetch('./tickets.json');
                const data = await res.json();
                setTickets(data);
            } catch (err) {
                console.log("Failed to fetch data", err);
            } finally {
                setLoading(false);
            }

        };
        fetchTickets();
    }, [setTickets]);

    if (loading) return <Loading />;

    if (!tickets.length) return <p className="text-center mt-4">No tickets available</p>;


    return (
        <div>
            <h1 className='text-2xl text-center md:text-left font-semibold'>Customer Tickets</h1>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {tickets.map(ticket => {
                    return <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        onClick={handleTicket}
                    />
                })}
            </div>
        </div>
    );
};

export default Tickets;