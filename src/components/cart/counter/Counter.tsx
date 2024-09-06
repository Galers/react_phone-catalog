import { FC } from 'react';

import styles from './counter.module.scss';

import { MinusIcon } from 'ui/icon/MinusIcon';
import { PlusIcon } from 'ui/icon/PlusIcon';
import { QuantityControl } from 'ui/button/quantity-control/QuantityControl';

import { onKeyDown } from 'utils/helpers/pressOnKey';

type TProps = {
  quantity: number;
  showError: boolean;
  onAddClick: () => void;
  onDeleteClick: () => void;
};

export const Counter: FC<TProps> = ({
  quantity,
  showError,
  onAddClick,
  onDeleteClick,
}) => {
  const disabled = quantity === 1;

  return (
    <div className={styles.counter}>
      <QuantityControl
        label="Decrease quantity"
        onClick={onDeleteClick}
        disabled={disabled}
      >
        <MinusIcon />
      </QuantityControl>
      <input
        className={styles.quantity}
        type="number"
        min="1"
        value={quantity}
        onKeyDown={e => onKeyDown(e, onAddClick, onDeleteClick)}
        readOnly={showError}
      />
      <QuantityControl
        label="Increase quantity"
        onClick={onAddClick}
        disabled={showError}
      >
        <PlusIcon />
      </QuantityControl>
    </div>
  );
};
