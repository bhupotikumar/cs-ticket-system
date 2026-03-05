import ProgressCard from './ProgressCard';
import ResolvedCard from './ResolvedCard';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ProgressCard />
            <ResolvedCard />
        </div>

    );
};
export default Banner;