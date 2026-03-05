import React from 'react';

const TicketCard = () => {
    return (
        <div className="card bg-gray-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-between">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between">
                    <div className="flex justify-start gap-2 items-center">
                        <p>id</p>
                        <span>priority</span>
                    </div>
                    <div className="flex gap-2 justify-end items-center">
                        <p>name</p>
                        <span>date</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;