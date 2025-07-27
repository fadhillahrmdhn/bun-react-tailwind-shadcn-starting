import { Button } from '../ui/button';
import { Linkedin, Github } from 'lucide-react';

export const ButtonCustom = ({ linkedin, github }: { linkedin: string; github: string }) => {
  return (
    <div>
      <a target="_blank" href={linkedin} className='mr-2'>
        <Button variant="outline">
          <Linkedin className="mr-2 h-4 w-4" /> Linkedin
        </Button>
      </a>
      <a target="_blank" href={github}>
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" /> Github
        </Button>
      </a>
    </div>
  );
};
