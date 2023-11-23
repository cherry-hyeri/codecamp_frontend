export interface IProfile {
  name: string;
  age: string;
  school: string;
  hobby?: string;
}

//1. Partial type > 모든 타입에 ?가 추가됨
type aaa = Partial<IProfile>;

// 2. Required type > 모든 타입의 ?가 삭제됨
type bbb = Required<IProfile>;

// 3. Pick type > 원하는 타입 객체 고르기
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit type > 타입 객체 빼기
type ddd = Omit<IProfile, "school">;

// 5. Record type
type eee = "철수" | "영희" | "훈이"; // Union type
let child1: eee = "철수"; // 선언한 Union type만 선택가능
let child2: string = "바나나"; //string type이면 가능

type fff = Record<eee, IProfile>; // eee 가 key로 바뀜

// 6. keyof 객체의 key들로 Union type만듬 ("name" | "age" | "school" | "hobby")
type ggg = keyof IProfile;
let myprofile: ggg = "hobby";

// 7. type 과 interface 차이 => 선언병합
//interface는 선언병합 가능
export interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

let profile: Partial<IProfile> = {
  candy: 10,
};
