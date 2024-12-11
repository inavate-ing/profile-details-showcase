import { Button } from "@/components/ui/button";
import {
    UserCog,
    Mail,
    Phone,
    Trash2,
    FileEdit,
    Share2
} from "lucide-react";

interface ActionPanelProps {
    isVisible: boolean;
}

const ActionPanel = ({ isVisible }: ActionPanelProps) => {
    if (!isVisible) return null;

    return (
        <div className="w-48 border-l border-slate-200 h-full">
            <div className="p-4 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-800">Actions</h2>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Edit clicked')}
                >
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit Profile
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Send email clicked')}
                >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Call clicked')}
                >
                    <Phone className="mr-2 h-4 w-4" />
                    Call User
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Share clicked')}
                >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Profile
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Settings clicked')}
                >
                    <UserCog className="mr-2 h-4 w-4" />
                    Settings
                </Button>

                <Button
                    variant="destructive"
                    className="w-full justify-start mt-4"
                    onClick={() => console.log('Delete clicked')}
                >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete User
                </Button>
            </div>
        </div>
    );
};

export default ActionPanel;