async function createUser(userData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newUser = await response.json();
        console.log('User created:', newUser);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com'
};

createUser(userData);