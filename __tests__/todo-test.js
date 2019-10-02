import React from 'react';
import renderer from 'react-test-renderer';

import Todo from '../todo';

describe('<Todo />', () => {
  it('renders', () => {
    const tree = renderer.create(<Todo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add-item', () => {
    const todoinst = renderer.create(<Todo />).getInstance();
    todoinst.addItemToList("new text");

    expect(todoinst.state.itemList).toEqual([{id: 1, title: "new text", isDone: false}]);
  });

  it('remove-item', () => {
    const todoinst = renderer.create(<Todo />).getInstance();
    todoinst.removeItem(1);

    expect(todoinst.state.itemList).toEqual([]);
  });
});