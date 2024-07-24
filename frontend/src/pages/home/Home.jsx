import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex h-screen w-full'>
            <div className='flex w-full max-w-7xl mx-auto px-4 py-2'>
                <div className="w-1/4 min-w-[280px] pr-4">
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
