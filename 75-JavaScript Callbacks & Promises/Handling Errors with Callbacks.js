function fetchData(callback) {
    setTimeout(() => {
        let error = null;
        let data = {id: 1, name: 'John Doe'};

        if (Math.random() < 0.5) {
            error = 'Error occurred';
            data = null;
        }

        callback(error, data);
    }, 2000);
}

function handleData(error, data) {
    if (error !== null) {
        console.error(error);
    } else {
        console.log('Data received:', data);
    }
}

fetchData(handleData);