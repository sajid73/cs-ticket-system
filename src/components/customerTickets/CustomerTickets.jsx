import React from 'react';
import TicketCard from './TicketCard';
import TaskStatus from '../task_status/TaskStatus';
import ResolvedTask from '../resolved_task/ResolvedTask';

const CustomerTickets = ({ tickets, handleClickStatus, inProgress, handleCompleteTask, resolved }) => {
    return (
        <div className='container mx-auto py-12 w-[1280px]'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-9">
                    <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tickets.map(ticket => (
                            <TicketCard key={ticket.id} {...ticket} handleClickStatus={handleClickStatus} />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-3 space-y-6">
                    <TaskStatus inProgress={inProgress} handleCompleteTask={handleCompleteTask} />
                    <ResolvedTask resolved={resolved} />
                </div>

            </div>
        </div>
    );
};

export default CustomerTickets;