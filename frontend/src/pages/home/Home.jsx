import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex h-screen w-full max-w-6xl mx-auto'>
            <div className='flex w-full rounded-xl overflow-hidden shadow-2xl bg-gray-800'>
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
