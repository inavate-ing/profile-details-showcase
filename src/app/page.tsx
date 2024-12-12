'use client';
import {useState} from "react";

import {User} from "@/types";
import {users} from "@/lib/mockData";

import UserList from "@/components/UserList";
import UserDetail from "@/components/UserDetail";
import ActionPanel from "@/components/ActionPanel";

export default function Home() {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <div className="h-screen flex justify-between">
            <UserList
                users={users}
                selectedUserId={selectedUser?.id || null}
                onSelectUser={setSelectedUser}
            />
            <UserDetail user={selectedUser}/>
            <ActionPanel isVisible={selectedUser !== null}/>
        </div>
    );
}
