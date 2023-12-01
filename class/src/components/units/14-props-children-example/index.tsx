interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>안녕 클레오파트라</div>
      <div>세상에서 제일가는 포테이토칩</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
    </div>
  );
}
