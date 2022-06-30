import { useState } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';

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

    setRequesting(false);

    if (slug === '') {
      router.push('/');

      return;
    }

    router.push(`/posts/${slug}`);
  };

  return (
    <div className="absolute top-0 right-0 p-4">
      <button
        className={classNames('btn btn-circle', {
          loading: requesting,
          disabled: requesting,
        })}
        onClick={onClick}
        data-test-id={postRandomButtonTestIds.root}
      >
        <span
          className={classNames('random-button__text', { hidden: requesting })}
        >
          TIL
        </span>
      </button>
    </div>
  );
};

export default RandomButton;
