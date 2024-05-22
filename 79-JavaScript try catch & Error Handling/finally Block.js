function fetchApiFromData(id, name) {
    let person = {
        'id': id,
        'name': name
    };
    return person;
}

try {
    let data = fetchApiFromData(221902113, 'Raiyan Jiyon');
    console.log('Data fetched:', data);
} catch (error) {
    console.error('Failed to fetch data:', error.message);
} finally {
    console.log('Fetch attempt finished.');
}
