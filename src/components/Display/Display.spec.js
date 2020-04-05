import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display/Display';

describe('Display', () => {
  let wrapper;

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  beforeEach(() => wrapper = shallow(<Display displayValue={''} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders the value of displayValue', () => {
    wrapper.setProps({ displayValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });
})