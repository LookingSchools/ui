import React, { useCallback } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Tags } from './Tags.bundle';
import { Button } from '../Button/Button.bundle';

export default {
  title: "Tags",
  decorators: [withKnobs],
  parameters: {
      docs: {
          readme: require("./README.md"),
      },
  },
};

const items = [
  'Очень длинный лейбл, который не умещается в ширину контейнера',
  'Два',
  'Три',
  'Четыре',
  'Пять',
  'Шесть',
  'Семь',
  'Восемь',
  'Девять',
  'Десять'
];

export const Template = () => {
  const handleRemove = useCallback((_e: any, id: number) => {
    console.log('remove id', id);
  }, []);

  return (
    <Tags style={{ maxWidth: 450 }} >
    {items.map(item => (
      <Button width='auto' key={item} id={item} size="m" theme="default" onRemove={handleRemove}>
        {item}
      </Button>
    ))}
  </Tags>
  );
};

Template.story = {
  name: "default",
};