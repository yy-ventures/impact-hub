import Head from 'next/head';
import React from 'react';
import PastEvents from '../../../components/Events/PastEvents/PastEvents';

const Upcoming = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
           <PastEvents/>
        </>
    );
};

export default Upcoming;