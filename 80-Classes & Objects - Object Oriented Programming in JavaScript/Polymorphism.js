class Bird {
    fly() {
        console.log('The bird is flying.');
    }
}

class Sparrow extends Bird {
    fly() {
        console.log('The sparrow is flying.');
    }
}

class Eagle extends Bird {
    fly() {
        console.log('The eagle is soaring.');
    }
}

const birds = [new Sparrow(), new Eagle()];

birds.forEach(bird => {
    bird.fly();
});
// Output:
// The sparrow is flying.
// The eagle is soaring.
