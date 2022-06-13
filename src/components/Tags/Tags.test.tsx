import React, { createRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Tags } from './Tags';
import { Tag } from '../Tag/Tag.bundle';
import { Tags as TagsCommon } from './Tags';
import userEvent from '@testing-library/user-event';

const items = [
  { label: 'Очень длинный лейбл, который не', width: 320 },
  { label: 'Два', width: 68 },
  { label: 'Три', width: 66 },
  { label: 'Четыре', width: 97 },
  { label: 'Пять', width: 76 },
  { label: 'Шесть', width: 88 },
  { label: 'Семь', width: 78 },
  { label: 'Восемь', width: 97 },
  { label: 'Девять', width: 93 },
  { label: 'Десять', width: 93 }
];
const TagsUsecase = ({maxWidth = 450, length = -1}) => (
  <Tags style={{ width: maxWidth, height: 64 }}>
    {items.slice(0, length).map(item => (
      <Tag key={item.label} id={item.label} label={item.label} size="m" theme="default" style={{ width: item.width, height: 28 }} />
    ))}
  </Tags>
)

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('Компонент Tags', () => {
  beforeAll(() => {
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetHeight: {
        get: function() { return parseFloat(window.getComputedStyle(this).height) || 0; }
      },
      offsetWidth: {
        get: function() { return parseFloat(window.getComputedStyle(this).width) || 0; }
      },
      scrollWidth: {
        get: function() { return parseFloat(window.getComputedStyle(this).width) || 0; }
      },
      scrollHeight: {
        get: function() { return 100; }
      },
    });
  })

  it('должен иметь корневой класс Tags', () => {
    expect(TagsCommon.displayName).toBe('Tags');
  });

  it('должен добавлять кастомные классы у корневого элемента', () => {
    const { container } = render(<Tags className="Custom-Class" />);
    const root = container.firstChild
    expect(root).toHaveClass('Custom-Class');
  });

  it('должен иметь ссылку на корневой элемент и на контрол', () => {
    const innerRef = createRef<HTMLDivElement>();
      render(<Tags innerRef={innerRef} />);
      expect(innerRef.current).not.toBe(null);
  });

  it('должен открываться/закрываться при нажатии на кнопку показать/скрыть', async () => {
    render(<TagsUsecase />)
    const firstHiddenElement = screen.getByText('Шесть').closest('div') as HTMLDivElement
    const toggler = screen.getByText(/ещё/).closest('button') as HTMLButtonElement
    await waitFor(() => {
      expect(firstHiddenElement).toHaveAttribute('aria-hidden', 'true')
    });
    userEvent.click(toggler);
    expect(firstHiddenElement).not.toHaveAttribute('aria-hidden');
  });

  it('должена отсутствовать кнопка показать/скрыть если элементы укладываются в количество строк', async () => {
    render(<TagsUsecase length={2} />)
    const toggler = screen.getByText(/ещё/).closest('button') as HTMLButtonElement
    await waitFor(() => {
      expect(toggler.closest('div')).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
