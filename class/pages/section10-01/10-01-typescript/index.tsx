export default function TypescriptPage() {
  let aaa = "안녕하세요"
aaa = 3  // 오류 // 타입스크립트가 자동으로 타입추론이 되어 오류 발생

// 타입명시
let bbb: string = "반갑습니다"
bbb = 10 // 오류 

// 타입명시가 필요한 상황 // 두가지 타입 가능하게
let ccc: number | string = 1000
ccc = "1000원"

// 숫자타입
let ddd = 10
ddd = "hi" // 오류

// boolean 타입
let eee: boolean = true
eee = false
eee = "false" // true로 작동함

// 배열타입
let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"] // 오류
let ggg: string[] = ["a", "b", "c", "d", 10] // 오류
let hhh: (string | number)[] = ["a", "b", "c", 10] //타입을 추론해서 어떤 타입을 사용하는지 알아보기
 
// 객체타입
const profile = {
	name: "apple",
	age: 10,
	product: "fruit"
}
profile.name = "pair" // 타입추론으로 이것만 가능
profile.age = "1개" // 오류
profile.buy = "mike" // 오류

//객체타입
interface IProfile {
	name: string
	age: number | string
	product: string
	buy?: string // 객체 유무가 상관없으면 ? 추가
}

const profile: IProfile {
	name: "apple",
	age: 10,
	product: "fruit"
}

// 함수타입
function add(num1: number, num2: number, unit: string): string{
	return num1 + num2 + unit	// return 타입은 --------------^ 에서 지정
}
const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

const add2(num1: number, num2: number, unit: string): string => {
	return num1 + num2 + unit	// return 타입은 --------------^ 에서 지정
}
const result2 = add2(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

// any 타입 자바스크립트와 동일
let qqq: any = "pinapple"
qqq = 123
qqq = true

  return <></>;
}
