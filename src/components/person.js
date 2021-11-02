class Person {
    constructor() {
        this.name = 'name';
        this.gender = 'female';
    }
}

class human extends Person {
    constructor() {
        super();
        this.gender = 'male';
    }
}