import { RedInput, BlueButton } from "./BoardWrite.style";
import { IBoardWriterUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriterUIProps) {
  return (
    <>
      <div>aaaa여기는 프리젠터aaaa</div>
      <div>
        작성자 :{" "}
        <RedInput
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.writer}
        />
        제목 :{" "}
        <input
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        내용 :{" "}
        <input
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <BlueButton
          onClick={props.isEdit ? props.onChangeUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </BlueButton>
      </div>
      <div>aaaa여기는 프리젠터aaaa</div>
    </>
  );
}
