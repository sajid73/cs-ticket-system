import React from 'react';

const ResolvedTask = ({ resolved }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">Resolved Task</h2>
            {
                resolved.length > 0 ? (
                    <ul className="space-y-2">
                        {resolved.map((ticket) => (
                            <li key={ticket.id} className="bg-[#E0E7FF] p-3 shadow-md rounded">
                                <h3 className="text-md font-semibold">{ticket.title}</h3>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm opacity-60">
                        No resolved tasks yet.
                    </p>
                )
            }
        </div>
    );
};

export default ResolvedTask;