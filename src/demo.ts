interface Contact {
    id: number;
    name: string;
}

interface UserContact<TExternalId> {
    id: number;
    name: string;
    userName: string;
    loadExternalId(): Task<TExternalId>
}


//Key note: one type IN, another type is OUT, but match the same type as T1
function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact>(a); //Key note: we matching the same properties like id, name in both interfaces
console.log(b); 
console.log(b.name);  //now it's possible, but still return ->undefined

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)

