import React from 'react';

// Project Components
import Header from '../Header/Header';
import Step from '../Step/Step';
import Radio from '../Radio/Radio';
import TextField from '../TextField/TextField';
import { BigCircleStep } from '../Circle/Circle';
import TextArea from '../TextArea/TextArea';

const Components = {
  header: Header,
  step: Step,
  radio: Radio,
  textField: TextField,
  circle: BigCircleStep,
  textarea: TextArea,
};

export const Component = (elem) => {
  if (typeof Components[elem.component] !== 'undefined') {
    return React.createElement(Components[elem.component], {
      key: elem.id,
      elem,
    });
  } else if (elem.step) {
    return React.createElement(Components['step'], {
      key: elem.id,
      elem,
    });
  }
  return null;
};
