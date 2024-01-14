import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickpage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  //============ 1차 ============
  //   const onClickpage2 = (): void => {
  //     void refetch({ page: 2 });
  //   };

  //   const onClickpage3 = (): void => {
  //     void refetch({ page: 3 });
  //   };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
          
      {new Array(10).fill("1").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickpage}>
          {index + 1}
        </span>
      ))}

      {/*============================== 
            3차 
        ==============================*/}
      {/* {[1, 2, 3, 4, 5].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickpage}>
          {index + 1}
        </span>
      ))} */}

      {/*============================== 
            2차 
        ==============================*/}
      {/* {[1, 2, 3, 4, 5].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickpage}>
          {el}
        </span>
      ))} */}

      {/*============================== 
            1차 
        ==============================*/}
      {/* <span id="1" onClick={onClickpage1}>
        1
      </span>
      <span id="2" onClick={onClickpage2}>
        2
      </span>
      <span id="3" onClick={onClickpage3}>
        3
      </span> */}
    </>
  );
}
