import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from '@/types';

interface UserDetailProps {
    user: User | null;
}

const UserDetail = ({ user }: UserDetailProps) => {
    if (!user) {
        return (
            <div className="flex-1 p-6 flex items-center justify-center text-slate-500 h-full">
                Select a user to view their details
            </div>
        );
    }

    return (
        <div className="flex-1 p-6 h-full overflow-y-auto">
            <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} alt={user.name} loading="lazy" />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-2xl font-semibold text-slate-800">{user.name}</h2>
                    <p className="text-slate-500">{user.profile.position}</p>
                </div>
            </div>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="contacts">Contacts</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Department:</label>
                            <div className="mt-1 text-slate-800">{user.profile.department}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Position:</label>
                            <div className="mt-1 text-slate-800">{user.profile.position}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Bio:</label>
                            <div className="mt-1 text-slate-800">{user.profile.bio}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">DOB:</label>
                            <div className="mt-1 text-slate-800">{user.profile.dateOfBirth}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Address:</label>
                            <div className="mt-1 text-slate-800">{user.profile.address}</div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="contacts" className="mt-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Email:</label>
                            <div className="mt-1 text-slate-800">{user.contacts.email}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Mobile:</label>
                            <div className="mt-1 text-slate-800">{user.contacts.mobile}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Skype ID:</label>
                            <div className="mt-1 text-slate-800">{user.contacts.skypeId}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">LinkedIn:</label>
                            <div className="mt-1 text-slate-800">{user.contacts.linkedin}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Twitter:</label>
                            <div className="mt-1 text-slate-800">{user.contacts.twitter}</div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default UserDetail;