'use client';

import UserList from "@/components/UserList";
import {useState} from "react";
import {User} from "@/types";
import {users} from "@/lib/mockData";

export default function Home() {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <div className="h-screen flex">
            <UserList
                users={users}
                selectedUserId={selectedUser?.id || null}
                onSelectUser={setSelectedUser}
            />
        </div>
    );
}
