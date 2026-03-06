import React, { Suspense } from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Loading from '../../components/Loading/Loading';

const Blog = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ComingSoon title="Blog Page" description="Our blog is coming soon with exciting posts!" />
        </Suspense>
    );
};

export default Blog;