import React from 'react';
import 'react-native';

global.React = React;

import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure( { adapter: new Adapter() } )

// enzyme
global.shallow = shallow
global.render = render
global.mount = mount