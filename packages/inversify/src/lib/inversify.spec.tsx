import React from 'react';
import { render } from '@testing-library/react';

import Inversify from './inversify';

describe('Inversify', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Inversify />);
    expect(baseElement).toBeTruthy();
  });
});
