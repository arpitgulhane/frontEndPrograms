class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    findContactByName(firstName, lastName) {
      return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }
  
    editContact(firstName, lastName, updatedContact) {
      const contact = this.findContactByName(firstName, lastName);
      if (contact) {
        Object.assign(contact, updatedContact);
      }
    }
  
    deleteContact(firstName, lastName) {
      const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  
    getContactCount() {
      return this.contacts.length;
    }
  
    checkDuplicateEntry(firstName, lastName) {
      return this.contacts.some(contact => contact.firstName === firstName && contact.lastName === lastName);
    }
  
    searchByCity(city) {
      return this.contacts.filter(contact => contact.city === city);
    }
  
    searchByState(state) {
      return this.contacts.filter(contact => contact.state === state);
    }
  
    getCountByCity() {
      const countByCity = {};
      this.contacts.forEach(contact => {
        countByCity[contact.city] = (countByCity[contact.city] || 0) + 1;
      });
      return countByCity;
    }
  
    getCountByState() {
      const countByState = {};
      this.contacts.forEach(contact => {
        countByState[contact.state] = (countByState[contact.state] || 0) + 1;
      });
      return countByState;
    }
  
    sortByName() {
      this.contacts.sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
        const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
  
    sortBy(property) {
      this.contacts.sort((a, b) => a[property] - b[property]);
    }
  
    toString() {
      return this.contacts.map(contact => `${contact.firstName} ${contact.lastName}`).join('\n');
    }
  }
  
  // Example usage:
  const addressBook = new AddressBook();
  
  // UC 3: Add new contacts
  const contact1 = new Contact('John', 'Doe', '123 Main St', 'City1', 'State1', '12345', '1234567890', 'john@example.com');
  const contact2 = new Contact('Jane', 'Smith', '456 Elm St', 'City2', 'State2', '67890', '0987654321', 'jane@example.com');
  addressBook.addContact(contact1);
  addressBook.addContact(contact2);
  
  // UC 4: Edit contact
  const updatedContact = new Contact('John', 'Doe', '789 Oak St', 'City3', 'State3', '54321', '9876543210', 'john.doe@example.com');
  addressBook.editContact('John', 'Doe', updatedContact);
  
  
  // UC 5: Delete contact
addressBook.deleteContact('Jane', 'Smith');

// UC 6: Get number of contacts
const contactCount = addressBook.getContactCount();

// UC 7: Check for duplicate entry
function isDuplicateEntry(firstName, lastName) {
  return addressBook.checkDuplicateEntry(firstName, lastName);
}

// UC 8: Search contacts by city or state
function searchByCity(city) {
  return addressBook.searchByCity(city);
}

function searchByState(state) {
  return addressBook.searchByState(state);
}

// UC 9: View contacts by city or state
function viewByCity(city) {
  const contacts = addressBook.searchByCity(city);
  console.log(`Contacts in ${city}:`);
  console.log(contacts);
}

function viewByState(state) {
  const contacts = addressBook.searchByState(state);
  console.log(`Contacts in ${state}:`);
  console.log(contacts);
}

// UC 10: Get count of contact persons by city or state
function getCountByCity() {
  const countByCity = addressBook.getCountByCity();
  console.log('Count by city:');
  console.log(countByCity);
}

function getCountByState() {
  const countByState = addressBook.getCountByState();
  console.log('Count by state:');
  console.log(countByState);
}

// UC 11: Sort entries alphabetically by Person's name
addressBook.sortByName();
console.log(addressBook.toString());

// UC 12: Sort entries by City, State, or Zip
addressBook.sortBy('city');
console.log('Sorted by City:');
console.log(addressBook.toString());

addressBook.sortBy('state');
console.log('Sorted by State:');
console.log(addressBook.toString());

addressBook.sortBy('zip');
console.log('Sorted by Zip:');
console.log(addressBook.toString());
