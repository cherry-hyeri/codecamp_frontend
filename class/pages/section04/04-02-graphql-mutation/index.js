import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "writer", title: "hi", contents: "nice") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myfx] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await myfx();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
