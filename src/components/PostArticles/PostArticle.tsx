import { slugTitleMap } from '../../constants';
import React from 'react';
import { ButtonsBySlug } from '../../lib/types';
import { Button } from '../Button';

type Props = {
  slug: string;
  buttonsBySlug: ButtonsBySlug;
  handleButtonClick: Function;
};

export function PostArticle({ slug, buttonsBySlug, handleButtonClick }: Props) {
  const buttons = buttonsBySlug[slug];

  return (
    <div>
      <p>{slugTitleMap[slug]}</p>
      {buttons.map((button) => (
        <Button key={button.value} button={button} handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
}
