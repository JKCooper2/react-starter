import React from 'react';

import HelloWorld from './index';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

export const Plain = (): React.ReactElement => <HelloWorld />;

Plain.story = {
  name: 'Plain',
};
