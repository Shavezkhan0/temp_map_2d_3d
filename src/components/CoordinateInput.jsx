import { ThemeProvider } from '@/app/Providers/ThemeContext';
import { useState } from 'react';

// The 'onGo' prop is a function passed from the parent to handle the new coordinates
export default function CoordinateInput({ onGo }) {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const handleGoClick = () => {
        // Basic validation
        if (lat && lng) {
            onGo(parseFloat(lat), parseFloat(lng));
        }
    };

    return (
        <div className="coordinate-input-container">
            <div style={{ marginBottom: '10px' }}>
                <input
                    className='bg-gray-400 text-white rounded-md'
                    type="number"
                    placeholder="Latitude"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    className='bg-gray-400 text-white rounded-md'
                    type="number"
                    placeholder="Longitude"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
            </div>
            <button
            className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700"
                onClick={handleGoClick}
                style={{ width: '100%', padding: '10px', cursor: 'pointer' }}
            >
                Go
            </button>
        </div>
    );
}