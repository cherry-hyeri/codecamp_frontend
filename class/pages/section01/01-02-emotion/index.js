import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion";

export default function EmotionPage() {
  return (
    <>
      <MyEmail>email: </MyEmail>
      <MyEmailInput type="text" />
      <button>클릭하세요</button>
      <img src="/next.svg" width="100px" />
    </>
  );
}
