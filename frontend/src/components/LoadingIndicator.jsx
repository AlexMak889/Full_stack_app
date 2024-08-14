import "../styles/LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader w-12 h-12 border-4 border-gray-300 border-t-4 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIndicator;
