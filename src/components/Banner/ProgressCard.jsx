import vector1 from '../../assets/vector1.png';

const ProgressCard = () => {
    return (
        <div className="w-full bg-linear-to-br from-violet-600 to-purple-500 rounded-lg border">
            <div
                className='hero'>
                <div className="hero-overlay bg-transparent flex justify-between items-center w-full gap-4">
                    <div className="w-1/2">
                        <img
                            src={vector1}
                            alt=""
                            className='w-full' />
                    </div>
                    <div className="w-1/2">
                        <img
                            className='w-full scale-x-[-1]'
                            src={vector1}
                            alt="" />
                    </div>
                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className='mb-4 text-xl md:text-2xl font-semibold md:font-bold text-gray-100'>In-Progress</h1>
                        <h1 className="text-3xl md:text-6xl font-semibold">0</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;