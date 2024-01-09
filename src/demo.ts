interface Contact {
    id: number;
    name: contactName;
    birthday?: Date; // is is optional because of "?"
    clone(name:string): Contact;
}

type contactName = string;

//here we typed function (argument typed as Contact ans Return typed as Contact as well)
function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson", clone(name:string): Contact {
     return { 
        id: this.id, 
        name: name, 
        clone: (name) => this   //arrow function can access ->this keyword
        } 
    } };
const b = clone(a);
console.log(b);

const c = a.clone("Bart Simpson");
console.log(`this is c`, c);
console.log(a);
