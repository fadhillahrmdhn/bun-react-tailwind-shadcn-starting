import { createFileRoute } from '@tanstack/react-router'
import { UseMemoCard } from '@/hooks';
import { ProfileCard } from '@/components/shared';
import { profileData } from '@/data/ProfileData';

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  return (
      <ProfileCard src={profileData.image} name={profileData.name} description={profileData.description} linkedin={profileData.socialMedia[1].url} github={profileData.socialMedia[0].url} />
  )
}