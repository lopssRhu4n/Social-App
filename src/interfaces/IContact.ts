import type { IMessage } from "@/interfaces/IMessage";

export interface IContact {
  id: number;
  username: string;
  img?: string;
  messages: IMessage[];
}
