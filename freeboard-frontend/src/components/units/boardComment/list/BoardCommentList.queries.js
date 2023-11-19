import { gql } from "@apollo/client";

export const FETCH_BOARDS_COMMENT = gql`
  query fetchBoardsComment {
    fetchBoardsComment {
      _id
      writer
      contents
      createdAt
    }
  }
`;
