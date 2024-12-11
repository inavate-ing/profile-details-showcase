import {User} from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserListProps {
    users: User[];
}

const UserList = ({users}: UserListProps) => {
    return (
        <div className="w-64 border-r border-slate-200 h-full overflow-y-auto">
            <div className="p-4 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-800">User list</h2>
            </div>
            <div className="py-2">
                {users.map((user) => (
                    <button
                        key={user.id}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors flex items-center gap-3"
                    >
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.name} loading="lazy"/>
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="text-slate-800">{user.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserList;