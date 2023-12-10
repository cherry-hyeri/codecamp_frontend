import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.TitleImg src="/images/comment.png" />
          <S.Title>댓글</S.Title>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.Star onChange={props.setStar} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          />
          <S.ContentsSubmitWrapper>
            <S.ContentsCount>{props.onChangeContents}/100</S.ContentsCount>
            <S.SubmitButton onClick={props.onClickSubmit}>
              등록하기
            </S.SubmitButton>
          </S.ContentsSubmitWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
