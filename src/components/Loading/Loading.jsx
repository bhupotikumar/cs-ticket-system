const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-400 text-lg font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;