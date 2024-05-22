class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('Something went wrong!');
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Custom error occurred:', error.message);
    } else {
        console.error('An unexpected error occurred:', error.message);
    }
}
