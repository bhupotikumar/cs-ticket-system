import { FaRegSmile } from 'react-icons/fa'; 
const ComingSoon = ({ title = "Page", description = "This page is under development." }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="text-6xl text-blue-500 mb-4 animate-bounce">
                <FaRegSmile />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-gray-600 text-lg">{description}</p>
            <p className="mt-4 text-gray-400 text-sm">Stay tuned for updates!</p>
        </div>
    );
};

export default ComingSoon;