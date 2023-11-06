import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct( # 변수의 타입 적는 곳
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 실제 우리가 전달할 변수 적는 곳 V
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "micky",
        createProductInput: {
          name: "mouse",
          detail: "cute",
          price: 1000,
        },
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
