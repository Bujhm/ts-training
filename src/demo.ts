interface Contact {
    id: number;
    name: contactName;
}

type contactName = string;

//Key note: which the type IN, the same type is OUT
function clone<T>(source: T): T {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);
console.log(b);  //return: {}

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)
console.log(dateRangeCopy); //return: {}
