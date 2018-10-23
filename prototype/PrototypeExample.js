export function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = () => console.log('bark');

export function Pug(name) {
  Dog.call(this, name);
}

Pug.prototype = Object.create(Dog.prototype);
Pug.prototype.constructor = Pug;


export const atomThePug = new Pug('atom');
