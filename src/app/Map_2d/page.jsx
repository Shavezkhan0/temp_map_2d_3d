"use client";

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import CoordinateInput from '@/components/CoordinateInput';
import Layout from '@/components/Layout';

export default function Page() {
    const [targetPosition, setTargetPosition] = useState(null);

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        {
            loading: () => <p>Loading map...</p>,
            ssr: false
        }
    ), []);

    const handleGoToCoordinates = (lat, lng) => {
        setTargetPosition([lat, lng]);
    };

    return (
        <Layout>
            {/* Add overflow-x-hidden to the main container */}
            <main 
              className="overflow-hidden" 
              style={{ position: 'relative', width: '100vw', height: '100vh' }}
            >
                <Map positionToGo={targetPosition} />
                <div className='fixed bottom-6 right-6 z-[1000]  p-4 rounded shadow-md'>
                    <CoordinateInput onGo={handleGoToCoordinates} />
                </div>
            </main>
        </Layout>
    );
}