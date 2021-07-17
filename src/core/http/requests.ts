import axios from 'axios';
import { Response } from '@/core/types/index.d';
import config from '@/core/config';

function Post(url: string, body: object): Response {
  axios
    .post(`${config('ServiceURI')}${url}`, body)
    .then(res => {
      console.log(res);
      return {
        data: res.data,
        status: res.status,
      };
    })
    .catch(e => {
      console.log(e);
      return undefined;
    });

  return undefined;
}

function Get(url: string): Response {
  axios
    .get(`${config('ServiceURI')}${url}`)
    .then(res => ({
      data: res.data,
      status: res.status,
    }))
    .catch(e => {
      console.log(e);
      return undefined;
    });

  return undefined;
}

export { Post, Get };
