import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('renders the values of operators', () => {
    wrapper.setProps({ operators: ['+', '-', '*', '/'] });
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });
});