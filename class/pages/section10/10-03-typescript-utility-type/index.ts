export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; //Union 타입
let child1: eee = "바나나"; // 철수, 영희, 훈이만 가능
let child2: string = "바나나";

type fff = Record<eee, IProfile>; //Record type

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; //keyof interface에서 key값만 뽑기
let myprofile: ggg = "hobby";

// 7. type vs interface 차이 => interface는 선언병합
export interface IProfile {
  candy: number; //선언병합으로 추가 됨
}
// 배운거 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
