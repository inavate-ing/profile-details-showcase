export interface User {
    id: number;
    name: string;
    avatar: string;
    profile: {
        dateOfBirth: string;
        address: string;
        bio: string;
        department: string;
        position: string;
    };
    contacts: {
        email: string;
        mobile: string;
        skypeId: string;
        linkedin: string;
        twitter: string;
    };
}