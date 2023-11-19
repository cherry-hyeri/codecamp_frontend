import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARDS_COMMENT } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS_COMMENT);

  return <BoardCommentListUI />;
}
