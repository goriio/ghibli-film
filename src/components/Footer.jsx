import styled from 'styled-components';
import { Container } from './Container';

const Border = styled.hr`
  margin-top: 1rem;
  border: none;
  border-top: 0.5px solid var(--color-fg-default);
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export function Footer() {
  return (
    <>
      <Border />
      <FooterContainer>
        <span>This is an open-source website.</span>
      </FooterContainer>
    </>
  );
}
