import React, { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Faq = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="FAQ Page" description="Our FAQs is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default Faq;