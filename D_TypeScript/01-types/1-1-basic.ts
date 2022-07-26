// 모듈이 없다면 모드 글로벌로 측정이 되기때문에 다른파일에서 똑같은 변수나 이런것들이 충돌된다.
// 때문에 모듈을 쓰기전까지 블록스코프 안에서 작성한다.
{
  /**
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined
    * Object: function, array...
  */

  // number
  const num:number = 1;  // 정수, 음수, 실수

  // string
  const str:string = "hello";

  // boolean
  const boal:boolean = false;

  // undefined (무언가 있거나 없거나)
  let name: undefined; // undeinfed만 넣을 수 있어서 X
  let age: number | undefined // 숫자 혹은 undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person:null; // null만 넣을 수 있어서 X
  let person2: string | null;

  // null과 undefined 중 undefined를 많이 사용하지만 값이 없는걸 명확하게 할 경우 null 사용

  // unknown --> Number, String 등 다 들어가진다. --> 가능하면 쓰지 말자.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any : 이것도 아무거나 들어가서 쓰지말자
  let anything: any = 0;
  anything = 'hello';

  // void --> 아무것도 리턴하지 않는다.
  function print():void {}
  let unusable: void = undefined; // 선언하고 void 쓸경우 undfeind만 반환하기 때문에 쓰지않는다.

  // never : 함수 결과값을 리턴하지 않는다. --> 리턴하는게 없다는걸 명시하기 위해서 쓰임
  function throwError(message: string): never {
    throw new Error(message);
    while(true){} // 위에 Error때문에 어차피 도달 못함.
  }
  let neverEnding: never; // 마찬가지로 이런거 절대 안씀.

  // Object. --> primitive타입 제외한 모든 타입을 넣을 수 있다.
  // 쓰지말도록하자 Object도 어떤건지 알려주는것이 좋다.
  let obj: object;
  function acceptSomeObject(obj: object){}
  acceptSomeObject({name: 'test'});
  acceptSomeObject({animal: 'dog'});

}