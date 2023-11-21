import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src="/images/option_update_icon.png/" />
              <S.DeleteIcon
                id={el._id}
                src="/images/option_delete_icon.png/"
                onClick={props.onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>2023.12.12</S.DateString>
          <S.DateString>{getDate(el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
