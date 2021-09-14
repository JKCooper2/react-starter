import React from 'react';
import { render, screen } from '@testing-library/react';

import HelloWorld from './index';

describe('HelloWorld', () => {
  it('should render correctly', async () => {
    render(<HelloWorld />);
    await screen.findByText('Hello World');
  });
});
