# til-web

Today I Learned for Nimble developers

## Setup

First, clone the repository:

`git clone git@github.com:nimblehq/til-web.git`

Then create an `.env` file by cloning `.env.example` file:

```bash
cp .env.example .env.local
```

And, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `src/pages/api/hello.ts`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy this app is to use the [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nimblehq/til-web).

Check out [Netlify deployment documentation](https://docs.netlify.com/site-deploys/overview/) for more details.

## Content

All content is written in [Markdown](https://en.wikipedia.org/wiki/Markdown).

- Content is stored in `_posts` directory.
- Files in `_posts` directory are automatically parsed and rendered as a post.
- File names must be kebab-cased and they are also used as the post's URL.
- Front matter is used to define the post's title, date, author, tags, and excerpt.
  - The `date` field is used to sort posts by date.
  - The excerpt is used as the post's summary.
  - The `tags` field is used to filter posts by tag.
  - The `author`: we can use either GitHub username or custom author name. To use GitHub username, set author field to `username: <username>`, to use custom author name, set `author` field to `name: <name>, avatarUrl: <avatarUrl>`.
  - Sample front matter:

    ```yaml
    ---
    title: 'My first post'
    excerpt: 'This will be shown on the post list page'
    coverImage: '/til/assets/posts/example/cover.png'
    date: '2022-05-15T15:00:00+07:00'
    author:
      name: Nimble
      avatarUrl: '/til/assets/authors/nimble.jpeg'
      username: 'nimblehq' # This will override the author name and avatarUrl
    ogImage:
      url: '/til/assets/posts/example/cover.png'
    tags: ['ruby', 'rail']
    ---
    ```

## License

This project is Copyright (c) 2014 and onwards Nimble. It is free software and may be redistributed under the terms specified in the [LICENSE] file.

[license]: /LICENSE

## About

![Nimble](https://assets.nimblehq.co/logo/dark/logo-dark-text-160.png)

This project is maintained and funded by Nimble.

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://github.com/nimblehq
[hire]: https://nimblehq.co/
