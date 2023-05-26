import styled from '@emotion/styled';

export const Block = styled.div``;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemText = styled.span`
  font-size: 25px;
  display: block;
`;

export const Text = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;
