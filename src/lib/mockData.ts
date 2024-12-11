import { faker } from '@faker-js/faker';
import { User } from '@/types';

faker.seed(123);
// Generate 25 users with faker
export const users: User[] = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    profile: {
        dateOfBirth: faker.date.birthdate().toISOString().split('T')[0],
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()} ${faker.location.zipCode()}`,
        bio: faker.person.bio(),
        department: faker.commerce.department(),
        position: faker.person.jobTitle(),
    },
    contacts: {
        email: faker.internet.email(),
        mobile: faker.phone.number(),
        skypeId: faker.internet.userName(),
        linkedin: faker.internet.url(),
        twitter: `@${faker.internet.userName()}`,
    },
}));