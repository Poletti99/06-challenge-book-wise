import { Heading } from '@/src/components/Heading';
import { ProfileContainer } from './styles';
import { PageContainer } from '@/src/components/PageContainer';
import { ReadedBook } from './components/ReadedBook';

export default function Profile() {
  return (
    <PageContainer>
      <ProfileContainer>
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
      </ProfileContainer>
    </PageContainer>
  );
}
