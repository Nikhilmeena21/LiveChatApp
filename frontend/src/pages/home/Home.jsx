import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex h-screen bg-gray-100'>
            <div className='flex w-full max-w-6xl mx-auto my-4 rounded-xl overflow-hidden shadow-2xl bg-white'>
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};
export default Home;