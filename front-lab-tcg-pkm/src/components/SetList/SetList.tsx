import React, { useEffect, useState } from 'react'
import { type Set } from '../../types'
import { Link } from '../Link'
import './SetList.css';

export function SetsList() {
    const [sets, setSets] = useState<Set[]>([]);
        useEffect(() => {
            fetch('http://localhost:3000/set')
                .then(async response => await response.json())
                .then(data => setSets(data))
                .catch(err => console.error(err))
        }, []);
        return (
            <>
            <div className="sets-container">
                {sets.map((set) => (
                    <Link
                        to={`/cards/${set.id}`}
                        key={set.id}
                        className="set-link"
                        target=""
                    >
                        <img
                        key={set.id}
                        src={set.logo_url}
                        alt={set.name}
                        className="set-image"
                    />
                    </Link>
                ))}
            </div>
            </>
        );
}