{
/*
  // 실행 : 터미널에서 ts-node 

  // JavaScript
  function jsAdd(num1, num2){
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number):number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id){
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // TypeScript
  function tsFetchNum(id:string) : Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }
*/
  // Optional parameter --> ?를 붙이게 되면 lastName을 전달해도되고 안해도 되는걸로 간주 --> undefined처리
  function printName(firstName:string, lastName?:string){
                                    // lastName: string | undefined인 경우에는 print('Tank') 이런식이면 에러남
                                    // --> 무조건 print('Tank' , undefined); 넣어주니까 ?쓰자
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Tank');  // ?가 없다면 에러가난다.
  printName('Anna', undefined);

  // Default Parameter(기본값) '='으로 쓴다.
  function printMessage(message:string = 'default message'){
    console.log(message);
  }

  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number{
    return numbers.reduce((prev, curr) => prev + curr)
  }

  console.log(addNumbers(1,2));
  console.log(addNumbers(1,2,3,4));
  console.log(addNumbers(1,2,3,4,5,6,7));
  console.log(addNumbers(1,2,3,4,5,0,12));


}

