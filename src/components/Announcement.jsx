import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #120205;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super amazing offer for templates!</Container>;
};

export default Announcement;
