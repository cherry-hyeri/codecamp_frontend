import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps,
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.TitleImg src="/images/comment.png" />
          <span>댓글</span>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer}
          />
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
          <S.Star onChange={props.setStar} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            value={props.contents}
          />
          <S.ContentsSubmitWrapper>
            <S.ContentsCount>{props.contents.length}/100</S.ContentsCount>
            <S.SubmitButton onClick={props.onClickWrite}>
              등록하기
            </S.SubmitButton>
          </S.ContentsSubmitWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
