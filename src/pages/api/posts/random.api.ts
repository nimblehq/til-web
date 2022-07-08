// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { randomPostSlug } from 'lib/post';

type RandomResponse = {
  slug: string | null;
};

type ErrorResponse = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RandomResponse | ErrorResponse>
) {
  const {
    body: { savedSlugs },
    method,
  } = req;

  if (method !== 'POST') {
    res.status(405).json({
      error: `Method ${method} not allowed`,
    });

    return;
  }

  const slug = randomPostSlug(savedSlugs);
  const response = { slug };

  res.status(200).json(response);
}
