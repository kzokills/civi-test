import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const MessageDetailsWrapper = styled.ScrollView`
flex-grow: 1
  width: 100%;
  height: ${Platform.select({
    ios: getStatusBarHeight() + 100,
    android: 100,
  })}px;
`;

export const ButtonsWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
  margin: 10px;
`;
