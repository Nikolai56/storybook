import React from 'react';
import { storiesOf } from '@storybook/react';
import { Welcome } from '@storybook/react/demo';
import { linkTo } from "@storybook/addon-links/src/index";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Basics|Button')} />);
