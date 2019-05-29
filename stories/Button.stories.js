import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
// import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';
import MyButton from '../src/components/Button';

storiesOf('Basics|Button', module)
    .addDecorator(withKnobs)
    .addWithJSX('all buttons', () => (
        <div>
            <p>Button that is used for forms</p>
            {/*<FormButton>Form.Button</FormButton>*/}
            <br />
            <p>Buttons that are used for everything else</p>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button outline containsIcon>
                {/*<Icon icon="link" />*/}
            </Button>
            <br />
            <Button outline>Outline</Button>
            <Button outline primary>
                Outline primary
            </Button>
            <Button outline secondary>
                Outline secondary
            </Button>
            <Button primary disabled>
                Disabled
            </Button>
            <br />
            <Button primary small>
                Primary
            </Button>
            <Button secondary small>
                Secondary
            </Button>
            <Button outline small>
                Outline
            </Button>
            <Button primary disabled small>
                Disabled
            </Button>
            <Button outline small containsIcon>
                {/*<Icon icon="link" />*/}
            </Button>
            <Button outline small>
                {/*<Icon icon="link" />*/}
                Link
            </Button>
            <MyButton
                // style={{fontFamily: 'BuloRounded'}}
                size={select('size', ['regular', 'small', 'big'], 'regular')}
                type={select('type', ['primary', 'secondary'], 'primary')}
            >{text('children', 'Regular Button')}</MyButton>
        </div>))
    .addWithJSX('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .addWithJSX('with some emoji', () => (
        <Button onClick={action('clicked')}>
          <span role="img" aria-label="so cool">
            😀 😎 👍 💯
          </span>
        </Button>
    ));

// storiesOf('Basics|Button', module)
//   .addWithJSX('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
