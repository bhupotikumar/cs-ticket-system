import ProgressCard from './ProgressCard';
import ResolvedCard from './ResolvedCard';

const Banner = ({ progressCounter, setProgressCounter }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ProgressCard
                progressCounter={progressCounter}
                setProgressCounter={setProgressCounter}
            />
            <ResolvedCard />
        </div>

    );
};
export default Banner;