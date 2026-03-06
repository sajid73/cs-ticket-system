import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const TaskStatus = ({ inProgress, handleCompleteTask }) => {
    const notify = () => toast("Ticket Completed");

    return (
        <div>
            <h2 className="text-lg font-semibold mb-3">Task Status</h2>
            {
                inProgress.length > 0 ? (
                    <ul className="space-y-2">
                        {inProgress.map((ticket) => (
                            <li key={ticket.id} className="bg-white p-4 rounded">
                                <h3 className="text-md font-semibold mb-2">{ticket.title}</h3>
                                <button className="bg-green-600 w-full text-white py-1 px-3 rounded hover:bg-green-800" onClick={() => {
                                    handleCompleteTask(ticket)
                                    notify()
                                }
                                }>
                                    Complete
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm opacity-60">
                        No tasks in progress
                    </p>
                )
            }
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default TaskStatus;