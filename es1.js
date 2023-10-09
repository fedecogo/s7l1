class User {
    constructor(_firstName, _lastName, _age, _location ='no-location-add') {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
    }
    showInfo() {
      return `Mi chiamo ${this.firstName} ${this.lastName},ho ${this.age} anni e vivo a ${this.location}`
    }
  
  }
  const durden = new User (
    'Tyler',
  'Durden',
  '30',
  )
  const me = new User (
    'Federico',
  'Capizzi',
  '21',
  'Milano'
  )
  const gasby = new User (
    'Il Grande',
  'Gasby',
  '31',
  'New York'
  )

  console.log(me.showInfo())
  console.log(durden.showInfo())
  console.log(gasby.showInfo())

  function confrontaEta(x, y) {
    if (x.age > y.age) {
      console.log(`${x.firstName} ${x.lastName} è più vecchio di ${y.firstName} ${y.lastName}.`);
    } else {
      console.log(`${y.firstName} ${y.lastName} è più vecchio di ${x.firstName} ${x.lastName}.`);
    } 
  }
  confrontaEta(durden, gasby);


  
  