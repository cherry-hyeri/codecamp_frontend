import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 300px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid red;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  border-top: 1px solid #bdbdbd;
  // border: 1px solid green;
`;

export const Title = styled.div`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 40px;
  text-align: left;
`;

export const TitleImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
  margin-right: 24px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
  margin-right: 24px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #bdbdbd;
  letter-spacing: 2px;
`;

export const ContentsWrapper = styled.div`
  width: 1200px;
  height: 160px;
  // padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  box-sizing: border-box;
  border: none;
  resize: none;
`;

export const ContentsSubmitWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

export const ContentsCount = styled.div`
  width: 1108px;
  height: 52px;
  border-top: 1px solid #bdbdbd;
  font-size: 16px;
  color: #bdbdbd;
  text-align: left;
  padding: 10px 14px;
  box-sizing: border-box;
  line-height: 31px;
`;

export const SubmitButton = styled.button`
  width: 92px;
  height: 53px;
  border: 0;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
