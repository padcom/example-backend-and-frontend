class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

fetch("/api/person")
  .then(response => response.json())
  .then(data => new Person(data.firstName, data.lastName))
  .then(person => {
    document.querySelector('#app').innerHTML = person.fullName()
  })
