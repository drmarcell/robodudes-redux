import React from 'react';
import CardList from './CardList';
import { create } from "react-test-renderer";

const mockRobots = [
    {
        key: 'k1',
        id: 1,
        name: 'John',
        email: 'john@gmail.com',

    },
    {
        key: 'k2',
        id: 2,
        name: 'Sally',
        email: 'sally@gmail.com',

    },

]

const cardList = create(<CardList robots={mockRobots} />);

it('expect to render CardList component', () => {
    expect(cardList.toJSON(<CardList robots={mockRobots} />)).toMatchSnapshot();
})