import React, { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Contact = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="Contact Page" description="Our contacts is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default Contact;