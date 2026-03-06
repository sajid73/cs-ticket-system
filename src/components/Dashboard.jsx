import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import CustomerTickets from './customerTickets/CustomerTickets';

const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const [inProgress, setInProgress] = useState([])
    const [resolved, setResolved] = useState([])

    useEffect(() => {
        fetch("/tickets.json")
            .then((res) => res.json())
            .then((data) => setTickets(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen pt-4">
            <Banner inProgress={inProgress} resolved={resolved} />
            <CustomerTickets tickets={tickets} setInProgress={setInProgress} setResolved={setResolved} />
        </div>
    );
};

export default Dashboard;