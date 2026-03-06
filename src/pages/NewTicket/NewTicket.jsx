import React, { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const NewTicket = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="New Ticket Page" description="Our this feature is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default NewTicket;