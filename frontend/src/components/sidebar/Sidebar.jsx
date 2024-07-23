import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className='w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col'>
            <div className='p-4'>
                <SearchInput />
            </div>
            <div className='flex-1 overflow-y-auto'>
                <Conversations />
            </div>
            <div className='p-4 border-t border-gray-200'>
                <LogoutButton />
            </div>
        </div>
    );
};
export default Sidebar;