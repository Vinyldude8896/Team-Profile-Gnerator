
const Manager = require('../lib/Manager');

test ('Creates a new Manager object', () => {
    const manager = new Manager('Kevin Reid', '001555888', 'kevinnivek@me.com', '2567', 'Manager')

    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.role).toEqual('Manager');
})

test ("Get Manager's name", () => {
    const manager = new Manager('Kevin Reid', '001555888', "kevinnivek@me.com", '256', 'Manager')
    expect(manager.getName()).toEqual(expect.any(String));
})

test ("Get Manager's employee ID", () => {
    const manager = new Manager('Kevin Reid', '001555888', "kevinnivek@me.com", '256', 'Manager')
    expect(manager.getId()).toEqual(expect.any(String));
})

test ("Get Manager's email address", () => {
    const manager = new Manager('Kevin Reid', '001555888', "kevinnivek@me.com", '256', 'Manager')
    expect(manager.getEmail()).toEqual(expect.any(String));
})

test ("Get Manager's role",  () =>{
    const manager = new Manager('Jacob Jones', '0098456', 'jacobjones@yahooo.com', '256', 'Manager')
    expect(manager.getRole()).toEqual('Manager');
})