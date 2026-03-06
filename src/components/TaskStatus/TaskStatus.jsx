import React from 'react';

const TaskStatus = ({ taskStatus, handleComplete }) => {

    return (
        <div className='text-center md:text-left w-full'>
            <h1 className='text-2xl font-semibold text-gray-700'>Task Status</h1>
            {taskStatus.length === 0 ?
                <p className='text-gray-700'>Select a ticket to add to Task Status.</p> :
                taskStatus.map(ticket => (
                    <div
                        key={ticket.id}
                        className="mb-2 p-2 bg-gray-100 rounded shadow cursor-pointer">
                        <h3 className="font-semibold">{ticket.title}</h3>
                        <div
                            onClick={() => handleComplete(ticket)} className="btn btn-success w-full my-2">Complete</div>
                    </div>
                ))
            }
        </div>
    );
};

export default TaskStatus;