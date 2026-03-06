import { Suspense, use } from 'react';
import TicketCard from './TicketCard';
import Loading from '../Loading/Loading';

const ticketPromise = fetch('./tickets.json')
    .then(res => res.json());


const Tickets = ({ taskStatus, setTaskStatus, progressCounter, setProgressCounter }) => {
    const tickets = use(ticketPromise);

    const handleTicket = (ticket) => {
        if (!taskStatus.some(t => t.id === ticket.id)) {
            setProgressCounter(progressCounter + 1);
            setTaskStatus([...taskStatus, ticket]);
        }
    };

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