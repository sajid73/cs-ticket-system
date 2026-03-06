import React from 'react';
import TicketCard from './TicketCard';

const CustomerTickets = () => {
    return (
        <div className='container mx-auto my-12 w-[1200px]'>
            {/* <h1 className="text-2xl font-bold mb-4 text-[--secondary-color]">Customer Tickets</h1>
            <TicketCard /> */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="lg:col-span-9">
                    <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* {tickets.map(ticket => (
                            <DashboardCard key={ticket.id} {...ticket} />
                        ))} */}
                        <TicketCard />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold">Task Status</h2>
                        <p className="text-sm opacity-60">
                            Select a ticket to add to Task Status
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Resolved Task</h2>
                        <p className="text-sm opacity-60">
                            No resolved tasks yet.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerTickets;