import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import CustomerTickets from './customerTickets/CustomerTickets';

const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const [inProgress, setInProgress] = useState([])
    const [resolved, setResolved] = useState([])

    const handleClickStatus = (ticket) => {
        setInProgress((prev) => [...prev, ticket]);
        setTickets((prev) => prev.filter(t => t.id !== ticket.id));
    }

    const handleCompleteTask = (ticket) => {
        setResolved((prev) => [...prev, ticket]);
        setInProgress((prev) => prev.filter(t => t.id !== ticket.id));
    }

    useEffect(() => {
        fetch("/tickets.json")
            .then((res) => res.json())
            .then((data) => setTickets(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen pt-4">
            <Banner inProgress={inProgress} resolved={resolved} />
            <CustomerTickets tickets={tickets}
                inProgress={inProgress}
                setInProgress={setInProgress}
                resolved={resolved}
                setResolved={setResolved}
                handleClickStatus={handleClickStatus}
                handleCompleteTask={handleCompleteTask} />
        </div>
    );
};

export default Dashboard;