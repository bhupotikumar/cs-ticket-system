import React, { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Download = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="Download Page" description="Our download is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default Download;