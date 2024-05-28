function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { id: 1, name: 'John Doe' };

            // Simulate a random error occurring
            if (Math.random() < 0.5) {
                resolve(data); // Resolving the promise with data
            } else {
                reject('Fetch error: Data could not be fetched'); // Rejecting the promise with an error message
            }
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a random error occurring during processing
            if (Math.random() < 0.5) {
                data.processed = true; // Processing the data
                resolve(data); // Resolving the promise with processed data
            } else {
                reject('Process error: Data could not be processed'); // Rejecting the promise with an error message
            }
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log('Data received:', data);
        return processData(data); // Returning the promise from processData
    })
    .then(processedData => {
        console.log('Processed data:', processedData);
    })
    .catch(error => {
        console.error(error); // Handling any error that occurs in the promise chain
    });
