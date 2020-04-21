import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct url', () => {
    const expectedUrl = 'abc';
    const component = shallow(<TripSummary id={expectedUrl} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedUrl}`);
    console.log(component.debug());
  });

  it('should render images', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'Lorem';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render proper props - name, cost, days', () => {
    const expectedName = 'name';
    const expectedCost = '51';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').text()).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });

  it('should thorw error without required props',() => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should check if tags are rendered in proper order', () => {
    const tags=['lorem', 'ip', 'sum'];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tags span').at(0)).toEqual[tags[0]];
    expect(component.find('.tags span').at(1)).toEqual[tags[1]];
    expect(component.find('.tags span').at(2)).toEqual[tags[2]];
  });

  it('should not render tags if props = undefined', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('div.tags').exists()).toEqual(true);
  });

});