export default class Foo {
  constructor(public name: string) {
    
  }
  
  say() : string {
    let foo = "Foo"
    return 'Hello ' + this.name + ' Foo!!!';
  }
}