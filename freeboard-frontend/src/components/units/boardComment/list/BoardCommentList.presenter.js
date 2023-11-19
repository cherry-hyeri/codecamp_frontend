import * as S from "./BoardCommentList.styles";

export default function BoardCommentListUI() {
  return (
    <>
      <S.ItemWrapper>
        <S.FlexWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>이기영</S.Writer>
            </S.WriterWrapper>
            <S.Contents>댓글 테스트</S.Contents>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon src="/images/option_update_icon.png/" />
            <S.DeleteIcon
              //   id={el._id}
              src="/images/option_delete_icon.png/"
              //   onClick={props.onClickDelete}
            />
          </S.OptionWrapper>
        </S.FlexWrapper>
        <S.DateString>2023.12.12</S.DateString>
        {/* <S.DateString>{getDate(el?.createdAt)}</S.DateString> */}
      </S.ItemWrapper>
    </>
  );
}
