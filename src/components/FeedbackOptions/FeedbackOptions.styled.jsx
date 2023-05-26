import styled from '@emotion/styled';

export const Block = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 1em rgb(53, 202, 8);
`;

export const BtnBlock = styled.div``;

export const Button = styled.button`
  --green: rgb(53, 202, 8);
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    color: rgb(240, 255, 236);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  :before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(27, 253, 156, 0.1) 40%,
      rgba(27, 253, 156, 0.1) 60%,
      transparent 100%
    );
  }

  :hover:before {
    transform: translateX(15em);
  }
`;
