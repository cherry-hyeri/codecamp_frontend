import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 19336) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  return (
    <>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div> {/* ? > 옵셔널 체이닝 */}
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
