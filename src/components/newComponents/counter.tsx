import React from 'react';
import { css } from '@emotion/css';
import Icon from '../../icons/icons';

export default () => {
  return (
    <div
      className={css`
        border: 1px solid #e1e4e8;
        width: 56px;
        display: flex;
        border-radius: 4px;
        padding: 1px;
        align-items: center;
      `}
    >
      <input
        className={css`
          border: 0px;
          width: 30px;
        `}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 5px;
        `}
      >
        <Icon icon='chevup' color='black' />
        <Icon icon='chevdown' color='black' />
      </div>
    </div>
  );
};
