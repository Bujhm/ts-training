interface Contact {
    id: number;
    name: contactName;
}

type contactName = string;

//Key note: one type IN, another type is OUT
function clone<T1, T2>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, Contact>(a); //Key note: strict Typing is here
console.log(b); 
console.log(b.name);  //now it's possible, but still return ->undefined

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)

