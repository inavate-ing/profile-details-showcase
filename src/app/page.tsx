'use client';

import UserList from "@/components/UserList";
import {users} from "@/lib/mockData";

export default function Home() {
    return (
        <div className="h-screen flex">
            <UserList
                users={users}
            />
        </div>
    );
}
