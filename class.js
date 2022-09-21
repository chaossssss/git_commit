class Person{
  name = '111'
  constructor(name) {
    this.name = name
  }
}

let person = new Person('3333')
// person.name = 'bbb'
console.log(person.name)

class PersonA extends Person {
  // name = '7777'
  constructor(name) {
    super(name)
    // this.name = name
  }
}
let personA = new PersonA('666')
console.log(personA.name)