import React from 'react';

const ResolvedTask = ({ resolvedTask }) => {
    return (
        <div className='mt-6 text-center md:text-left w-full'>
            <h1 className='text-2xl font-semibold text-gray-700'>Resolved Task</h1>
            {resolvedTask.length === 0 ?
                <p className='text-gray-700'>No resolved tasks yet.</p> :
                resolvedTask.map(ticket => (
                    < div
                        key={ticket.id}
                        className="mb-2 p-2 bg-gray-100 rounded shadow cursor-pointer" >
                        <h3 className="font-semibold">{ticket.title}</h3>
                    </div>
                ))
            }
        </div >
    );
};

export default ResolvedTask;