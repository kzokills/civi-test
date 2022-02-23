import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {View} from 'native-base';

import styled from 'styled-components/native';

type ExtraProps = {
  isSeen?: boolean;
};

export const ListItem = styled(View)<ExtraProps>`
  width: 100%;
  height: ${Platform.select({
    ios: getStatusBarHeight() + 60,
    android: 60,
  })}px;
  padding: ${Platform.select({
    ios: `${getStatusBarHeight()}px 8px 0px 8px`,
    android: '0px 8px 0px 8px',
  })};

  flex-direction: row;
  align-items: center;

  elevation: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
`;

export const Body = styled.View`
  flex-direction: column;
  width: 60%;
`;

export const Right = styled.View`
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const MessagePreview = styled.Text``;
