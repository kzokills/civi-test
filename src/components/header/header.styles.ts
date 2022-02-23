import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {Button as BaseButton} from 'native-base';
import styled from 'styled-components/native';

export const Container = styled.View`
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
`;

export const TitleContainer = styled.View`
  flex: 3;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export const LeftContainer = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RightContainer = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled(BaseButton)`
  padding: 2px;

  border-radius: 30px;
`;
