// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cache from '../../cache';

type Data = {
  name: string,
  visit: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  cache.counter = cache.counter + 1;
  res.status(200).json({ name: 'John Doe', visit: cache.counter })
}
