import Link from 'next/link';
import React from 'react';

const HomeHero = () => {
    return (
        <div>
            <h1>Im the home hero</h1>
            <Link href="/about">About</Link>
        </div>
    );
};

export default HomeHero;