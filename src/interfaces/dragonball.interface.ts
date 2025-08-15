import type { LinkInterface, MetaInterface } from "./";

export interface DragonballItem {
  id: number;
  name: string;
  ki: string;
  race: string;
  gender: string;
  image: string;
}

export interface DragonballResponse {
  items: DragonballItem[];
  meta: MetaInterface;
  links: LinkInterface;
}
