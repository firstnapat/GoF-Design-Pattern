import { Animal, Dog, Owner } from "./animal";

describe('Animal', () => {
    // it('should be abloe to eat', () => {
    //     const animal = new Animal('Dog');
    //     expect(animal.eat()).toBe('eating'); 
    // })

});

describe('Dog', () => {
    // it('should be able to eat like animal', () => {
    //     let animal: Animal = new Dog('Poodle');
    //     expect(animal.eat()).toBe('I am eating like dog');

    //     animal = new Animal('Poodle');
    //     expect(animal.eat()).toBe("eating");
    // });
     it('should be able to eat like animal', () => {
        let animal: Animal = new Dog('Poodle');
        expect(animal.eat()).toBe('I am eating like dog');
    });
});

describe('Owner', () => {
     it('should be able to play with dog', () => {
       const owner = new Owner();
       const dog = new Dog('Poodle');
       owner.have(dog);
       expect(owner.play()).toBe("Whoof! Whoof!");
    });
});