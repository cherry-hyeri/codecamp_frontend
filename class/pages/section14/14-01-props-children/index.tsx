import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <>
      <div>+++++++++++ red +++++++++++++</div>
      {/* 쏙 들어가기 땡겨오기 */}
      <Example school="highschool">
        <div>
          <input type="text" />
          <div>감자칩</div>
          <button>Click Me!</button>
        </div>
      </Example>
      <div>+++++++++++ red +++++++++++++</div>
    </>
  );
}
