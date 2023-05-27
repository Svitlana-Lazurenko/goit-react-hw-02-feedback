import styled from '@emotion/styled';

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
`;

export const TotalFeedback = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

export const PositiveFeedback = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
`;
