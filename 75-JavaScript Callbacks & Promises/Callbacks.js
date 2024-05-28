function fetchData(callback) {
    setTimeout(() => {
        let data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log('Data received: ', data);
}

fetchData(handleData);
