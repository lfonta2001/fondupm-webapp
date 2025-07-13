import { useState, useEffect } from 'react';

export function Body() {
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('https://api.fondupm.com/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            authorization: `Bearer ${token}`,
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setIsLoading(false);
            });
    }, [token]);
        
    return (
        <section id="">

        </section>
    );
}
