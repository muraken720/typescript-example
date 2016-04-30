import Foo from './Foo';

/**
 * メインクラス
 */
class Main {
  public static main() : void {
    console.log('Hello Word!');
    
    let foo : Foo = new Foo('muraken720')
    
    let msg : string = foo.say();
    console.log(msg);
  }
}

Main.main();
