import React from 'react';
import * as uuid from 'uuid';

import { sortOptions } from './sort-options';

export const Header: React.FC = () => (
  <div className="nutrition-table__header nutrition-table__row">
    <div />
    {sortOptions.map(({ title }) => (
      <div key={uuid.v4()} className="nutrition-table__label nutrition-table__label_sortable">
        {title}
      </div>
    ))}
  </div>
);
