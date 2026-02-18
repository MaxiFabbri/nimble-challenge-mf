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
            if (userData === null) {
                setError("Failed to fetch user data");
                setLoading(false);
                return;
            }
            setUser(userData);
            const positionsData = await getPositionsInfo();
            if (positionsData === null) {
                setError("Failed to fetch positions data");
                setLoading(false);
                return;
            }
            (positionsData ? setPositions(positionsData) : setPositions([]) && setError("Failed to fetch positions data"));
            setLoading(false);
        };

        fetchData();
    }, []);

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