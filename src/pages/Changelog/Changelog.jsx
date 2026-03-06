import React, { Suspense } from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Loading from '../../components/Loading/Loading';

const Changelog = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="Changelog Page" description="Our changelog is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default Changelog;