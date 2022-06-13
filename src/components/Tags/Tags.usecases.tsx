import React, { useCallback, useRef } from 'react';
import { Tags } from './Tags';

export const requiredProps = {
  hiddenText: ' вычислений усечения текста в зависимости от количества строк и ширины.',
  visibleText: 'Компонент отображает видимую часть текста, остальную часть скрывает. Компонент НЕ производит'
};

export const TagsUsecase = () => {
  const [isExtended, setIsExtended] = React.useState(false);
  const handleClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended]);
  return <Tags {...requiredProps} onToggle={handleClick} isExtended={isExtended} />;
};

export const TagsGetRef = () => {
  const ref = useRef(null);
  return (
    <>
      <Tags {...requiredProps} innerRef={ref} />
      {ref.current && <div>HasRef</div>}
    </>
  );
};
