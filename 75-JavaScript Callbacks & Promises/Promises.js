let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = { id: 1, name: 'John Doe' };

        // Generate a random number and decide whether to resolve or reject
        if (Math.random() < 0.5) {
            resolve(data); // Resolve with data
        } else {
            reject('Error occurred'); // Reject with an error message
        }
    }, 2000);
});

fetchData
    .then(data => {
        console.log('Data received:', data); // Handle successful data retrieval
    })
    .catch(error => {
        console.error(error); // Handle error
    });
