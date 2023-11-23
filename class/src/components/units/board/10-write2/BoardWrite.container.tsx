import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables = $ 역할을 함
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(
      `/section10-01/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onChangeUpdate = async () => {
    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    //여기서 수정하기
    const result = await updateBoard({
      variables: myvariables,
    });
    console.log("update :", result);
    router.push(
      `/section10-01/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      <div>0000여기는 컴포넌트00000</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeUpdate={onChangeUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined 이거나, data 이거나 둘 중 하나
      />
      <div>0000여기는 컴포넌트00000</div>
    </>
  );
}
