import { RedInput, BlueButton } from "./BoardWrite.style";

export default function BoardWriteUI(props) {
  return (
    <>
      <div>aaaa여기는 프리젠터aaaa</div>
      <div>
        작성자 : <RedInput type="text" onChange={props.bbb} />
        제목 : <input type="text" onChange={props.ccc} />
        내용 : <input type="text" onChange={props.ddd} />
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
      </div>
      <div>aaaa여기는 프리젠터aaaa</div>
    </>
  );
}
