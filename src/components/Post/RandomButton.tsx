import { useRouter } from 'next/router';

import { randomSlug } from 'helpers/randomSlug';

export const postRandomButtonTestIds = {
  root: 'posts__random-button',
};

const RandomButton = () => {
  const router = useRouter();
  const onClick = async () => {
    const slug = await randomSlug();

    if (slug === '') {
      router.push('/');

      return;
    }

    router.push(`/posts/${slug}`);
  };

  return (
    <div className="absolute top-0 right-0 p-4">
      <button
        className="btn btn-circle"
        onClick={onClick}
        data-test-id={postRandomButtonTestIds.root}
      >
        <span className="random-button__text">TIL</span>
      </button>
    </div>
  );
};

export default RandomButton;
