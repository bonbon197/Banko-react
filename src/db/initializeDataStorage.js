import { saveToLocalStorage } from "./dbInterface";


const initializeDataStorage = () => {
    const accountsData = JSON.parse(localStorage.getItem('accounts'));

    if (!accountsData) {
        const initialData = [
            {
                id: 1,
                email: 'user1@email.com',
                username: 'user1',
                firstName: 'User1',
                lastName: 'TestUser1',
                password: '123456',
                balance: 1000,
                transactions: [
                    {
                        date: '2020-01-01',
                        description: 'Initial deposit',
                        amount: 1000,
                    }
                ]
            },
            {
                id: 2,
                email: 'user2@email.com',
                username: 'user2',
                firstName: 'User2',
                lastName: 'TestUser2',
                password: '1234567',
                balance: 500,
                transactions: [
                    {
                        date: '2020-01-01',
                        description: 'Initial deposit',
                        amount: 500,
                    }
                ]
            }
        ];

        saveToLocalStorage(initialData);
    }
}

export default initializeDataStorage;