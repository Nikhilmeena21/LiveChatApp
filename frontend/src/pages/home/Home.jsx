import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex h-screen w-full max-w-7xl mx-auto'>
            <div className='flex w-full rounded-xl overflow-hidden bg-gray-800'>
                <div className="w-1/3 max-w-sm">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <MessageContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;
