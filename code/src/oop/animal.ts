export abstract class Animal {
    private breed: string = 'unknown';

    constructor(breed: string) {
        this.breed = breed;
    }

    // Animal() {} func ที่ชื่อเดียวกับ class มันจะสร้าง Object ขึ้นมา แต่เราจะไม่ทำแบบนั้น เราจะใช้ constructor สร้างให้เลย

   abstract eat(): string;
}

// export class Dog {
//     eat() {
//         return 'eating';
//     }
// }

export class Dog extends Animal implements Pet  {
    eat() {
        return 'I am eating like dog'
    }

    bark() {
        return 'Whoof! Whoof!'
    }

    play(): string {
        return this.bark();
    }
}

export class Cat extends Animal implements Pet {
    cry() {
        return 'Meow!';
    }

    eat(): string {
        return 'I am eating like cat!';
    }

    play(): string {
        return this.cry();
    }
}
export interface Pet {
    play(): string;
}

export class Owner {
   private pet: Pet | undefined;  // concret type (coupling type) ที่ผูกกับ Owner ทำไงถ้าอยากมีแมวมั่ง เอา Animal มาก็ไม่ได้ เพราะแมวกับหมาร้องไม่เหมือนกัน

   have(pet: Pet){
    this.pet = pet;
   }

   play(){
    if (this.pet) {
        return this.pet.play();
    }
    return 'I do not have a pet';
   }
}