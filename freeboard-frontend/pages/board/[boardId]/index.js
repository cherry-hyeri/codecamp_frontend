import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "../../../styles/boardDetail";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avater.png" />
              <S.Info>
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>{data?.fetchBoard?.createdAt}</S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchBoard?.title}</S.Title>
            <S.Contents>{data?.fetchBoard?.contents}</S.Contents>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
