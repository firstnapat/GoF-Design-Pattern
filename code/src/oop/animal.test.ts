import { Animal, Cat, Dog, Owner, Pet } from "./animal";

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
       
       let pet: Pet = new Dog('Poodle');
       owner.have(pet);

       expect(owner.play()).toBe("Whoof! Whoof!");

       pet = new Cat('Thai');
       owner.have(pet);
       expect(owner.play()).toBe('Meow!');
    });
});