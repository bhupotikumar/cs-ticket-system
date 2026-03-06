import Banner from '../../components/Banner/Banner';
import Tickets from '../../components/Tickets/Tickets';
import TaskStatus from '../../components/TaskStatus/TaskStatus';
import ResolvedTask from '../../components/ResolvedTask/ResolvedTask';
import { Suspense, useState } from 'react';
import Loading from '../../components/Loading/Loading';

const Home = () => {
    const [tickets, setTickets] = useState([]);
    const [taskStatus, setTaskStatus] = useState([]);
    const [resolvedTask, setResolvedTask] = useState([]);
    const [progressCounter, setProgressCounter] = useState(0);
    const [resolvedCounter, setResolvedCounter] = useState(0);

    const handleTicket = (ticket) => {
        if (!taskStatus.some(t => t.id === ticket.id)) {
            setTickets(prev => prev.filter(t => t.id !== ticket.id));
            setProgressCounter(progressCounter + 1);
            setTaskStatus([...taskStatus, ticket]);
        }
    };
    const handleComplete = (ticket) => {
        setTaskStatus(prev => prev.filter(t => t.id !== ticket.id));
        setProgressCounter(progressCounter - 1);
        setResolvedCounter(resolvedCounter + 1);
        setResolvedTask(prev => [...prev, ticket]);
    };

    return (
        <Suspense fallback={<Loading />}>
            <div className="my-12 w-11/12 min-h-[50vh] mx-auto">
                <Banner
                    progressCounter={progressCounter}
                    resolvedCounter={resolvedCounter}
                    setProgressCounter={setProgressCounter}
                />
                <main className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className="col-span-3">
                        <Tickets
                            tickets={tickets}
                            setTickets={setTickets}
                            handleTicket={handleTicket}
                        />
                    </div>
                    <aside className='col-span-2 lg:col-span-1 md:flex md:justify-between md:items-center lg:block'>
                        <TaskStatus
                            handleComplete={handleComplete}
                            taskStatus={taskStatus}
                        />
                        <ResolvedTask
                            resolvedTask={resolvedTask}
                        />
                    </aside>

                </main>
            </div>
        </Suspense>
    );
};

export default Home;