// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { randomPostSlug } from 'lib/post';

type RandomResponse = {
  slug: string;
  excludedSlugs: string[];
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

  const { slug, excludedSlugs } = randomPostSlug(savedSlugs);

  const response = { slug, excludedSlugs };

  res.status(200).json(response);
}
