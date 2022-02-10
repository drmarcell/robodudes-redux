import React from 'react';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';
import { create } from "react-test-renderer";

const card = create(<Card />);

it('expect to render Card component', () => {
    expect(card.toJSON(<Card />)).toMatchSnapshot();
})