(function () {
  'use strict';

  class Person{
    consturctor(name) {
      this.name = name;
    }
  }

  let person = new Person('aaa');
  console.log(person.name);

})();
