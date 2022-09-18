import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';

import IconShuffle from 'assets/icons/icon-shuffle.svg';
import { randomSlug } from 'services/randomSlug';

export const postRandomButtonTestIds = {
  root: 'posts__random-button',
};

const RandomButton = () => {
  const router = useRouter();
  const [requesting, setRequesting] = useState(false);
  const onClick = async () => {
    setRequesting(true);

    const slug = await randomSlug();

    if (!slug) {
      router.push('/');

      return;
    }

    router.push(`/posts/${slug}`);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setRequesting(false);
    });
  }, [router.events]);

  return (
    <button
      className={classNames('btn random-btn', {
        loading: requesting,
        disabled: requesting,
        'random-btn--loading': requesting,
      })}
      onClick={onClick}
      data-test-id={postRandomButtonTestIds.root}
    >
      <IconShuffle className="icon" />
      <span className="sr-only">Random a post</span>
    </button>
  );
};

export default RandomButton;
