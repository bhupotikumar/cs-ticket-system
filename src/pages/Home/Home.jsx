import Banner from '../../components/Banner/Banner';
import Tickets from '../../components/Tickets/Tickets';
import TaskStatus from '../../components/TaskStatus/TaskStatus';
import ResolvedTask from '../../components/ResolvedTask/ResolvedTask';
import { useState } from 'react';

const Home = () => {
    const [taskStatus, setTaskStatus] = useState([]);
    const [progressCounter, setProgressCounter] = useState(0);

    const handleTicket = (ticket) => {
        if (!taskStatus.some(t => t.id === ticket.id)) {
            setProgressCounter(progressCounter + 1);
            setTaskStatus([...taskStatus, ticket]);
        }
    };
    const handleComplete = (id) => {
        setTaskStatus(prev => prev.filter(t => t.id !== id));
        setProgressCounter(progressCounter - 1);
    };

    return (
        <div className="my-12 w-11/12 min-h-[50vh] mx-auto">
            <Banner
                progressCounter={progressCounter}
                setProgressCounter={setProgressCounter}
            />
            <main className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="col-span-3">
                    <Tickets
                        handleTicket={handleTicket}
                        taskStatus={taskStatus}
                        setTaskStatus={setTaskStatus}
                        progressCounter={progressCounter}
                        setProgressCounter={setProgressCounter}
                    />
                </div>
                <aside className='col-span-2 lg:col-span-1 md:flex md:justify-between md:items-center lg:block'>
                    <TaskStatus
                        handleComplete={handleComplete}
                        taskStatus={taskStatus}
                        setTaskStatus={setTaskStatus} />
                    <ResolvedTask />
                </aside>

            </main>
        </div>
    );
};

export default Home;