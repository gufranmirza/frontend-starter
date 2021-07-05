import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';

export interface CookieMessage extends IncomingMessage {
  cookies: { [name: string]: string };
}

export interface CookiesPageContext extends NextPageContext {
  req: CookieMessage | undefined;
}

export type Response = {
  data: Record<string, any>;
  status: number;
};

export type Config = {
  ServiceURI: string;
};
