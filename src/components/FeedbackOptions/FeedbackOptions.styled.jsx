import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 0.7em 2.7em;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  font-size: 15px;
  letter-spacing: 0.06em;
  color: rgb(53, 202, 8);

  border-radius: 0.6em;
  border: 2px solid rgb(53, 202, 8);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
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
    transition: transform 0.4s ease-in-out;

    position: absolute;
    left: -4em;
    top: 0;

    width: 4em;
    height: 100%;

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
