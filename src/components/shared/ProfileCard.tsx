import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { AvatarCustom } from './AvatarCustom';
import { ButtonCustom } from './ButtonCustom';

export const ProfileCard = ({ src, name, description, linkedin, github }: { src: string; name: string; description: string; linkedin: string; github: string }) => {
  return (
    <Card className="flex flex-col items-center p-4 text-center lg:flex-row lg:items-start lg:text-left">
      <CardHeader className="p-2">
        <AvatarCustom src={src} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ButtonCustom linkedin={linkedin} github={github} />
      </CardContent>
    </Card>
  );
};
