import { useState, useEffect } from 'react'
import { getUserInfo } from '../utils/userApi';
import { getPositionsInfo } from '../utils/positionsApi';
import PositionCard from './PositionCard';
import './PositionsContainer.css';

const PositionsContainer = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const userData = await getUserInfo("maxifabbri1972@gmail.com");
            setUser(userData);
            const positionsData = await getPositionsInfo();
            (positionsData ? setPositions(positionsData) : setPositions([]) && setError("Failed to fetch positions data"));

            console.log("User info in App component:", userData);
            console.log("Positions info in App component:", positionsData);

            setLoading(false);
        };

        fetchData();
    }, []); // se ejecuta una sola vez al montar el componente

    return (
        <div>
            <h2>Positions</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : positions.length > 0 ? (
                <div className="positions-list">
                    {positions.map((position) => (
                        <PositionCard key={position.id} position={position} user={user} />
                    ))}
                </div>
            ) : (
                <p>No positions available.</p>
            )}
        </div>
    );
}


export default PositionsContainer;