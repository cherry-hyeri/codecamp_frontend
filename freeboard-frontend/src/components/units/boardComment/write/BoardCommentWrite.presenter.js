import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI() {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.TitleImg src="/images/comment.png" />
          <S.Title>댓글</S.Title>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.Writer placeholder="작성자" />
          <S.Password placeholder="비밀번호" />
          <S.Stars>★★★★★</S.Stars>
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
          <S.ContentsSubmitWrapper>
            <S.ContentsCount>0/100</S.ContentsCount>
            <S.SubmitButton>등록하기</S.SubmitButton>
          </S.ContentsSubmitWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
