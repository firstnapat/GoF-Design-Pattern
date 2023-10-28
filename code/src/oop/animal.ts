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

export class Dog extends Animal {
    eat() {
        return 'I am eating like dog'
    }

    bark() {
        return 'Whoof! Whoof!'
    }
}

export class Cat extends Animal {
    cry() {
        return 'Meow!';
    }
    eat() {
        return 'I am eating like cat!';
    }
}
export interface Pet {
    play(): string;
}

export class Owner {
   private dog: Dog | undefined;  // concret type (coupling type) ที่ผูกกับ Owner ทำไงถ้าอยากมีแมวมั่ง เอา Animal มาก็ไม่ได้ เพราะแมวกับหมาร้องไม่เหมือนกัน

   have(dog: Dog){
    this.dog = dog;
   }

   play(){
    if (this.dog) {
        return this.dog.bark();
    }
    return 'I do not have a dog';
   }
}