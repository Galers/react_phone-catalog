import { FC, ReactNode } from 'react';

import styles from './quantityControl.module.scss';
import cn from 'classnames';

interface IProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  children: ReactNode;
}

export const QuantityControl: FC<IProps> = ({
  children,
  disabled,
  label,
  onClick,
}) => {
  return (
    <button
      className={cn(styles.quantityControl, disabled && styles.disabled)}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
