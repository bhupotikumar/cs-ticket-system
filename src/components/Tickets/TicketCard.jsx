import { FaCalendarWeek } from 'react-icons/fa';

const TicketCard = ({ ticket, onClick }) => {
    const { id, title, description, createdAt, customer, priority, status } = ticket;

    return (
        <div
            onClick={() => onClick(ticket)}
            className="card bg-gray-100 w-full mx-auto shadow-sm">
            <div className="card-body text-gray-600">
                <h2 className="card-title justify-between text-gray-700">
                    {title}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-between flex-wrap">
                    <div className="flex justify-start gap-2 items-center">
                        <p>#{id}</p>
                        {priority === "High" ?
                            <span className='text-red-600'>{priority} Priority</span> : priority === "Medium" ?
                                <span className='text-yellow-600'>{priority} Priority</span> : <span className='text-green-600'>{priority} Priority</span>}
                    </div>
                    <div className="flex gap-2 justify-end items-center">
                        <p>{customer}</p>
                        <span className='flex items-center gap-2'><FaCalendarWeek />{createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;