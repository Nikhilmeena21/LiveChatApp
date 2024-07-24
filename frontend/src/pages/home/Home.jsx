import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex h-screen w-full bg-gray-900 p-2'>
            <div className='flex w-full max-w-7xl mx-auto rounded-lg overflow-hidden'>
                <div className="w-[400px] bg-gray-800">
                    <Sidebar />
                </div>
                <div className="flex-1 bg-gray-700">
                    <MessageContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;
