import React from 'react';
import {StatusBar} from 'react-native';

import {Icon, Text} from 'native-base';
import PropTypes from 'prop-types';

import {
  Container,
  LeftContainer,
  TitleContainer,
  RightContainer,
  Button,
} from './header.styles';

type IconProps = {
  icon: {
    name: string;
    type?: string;
  };
};

type HeaderProps = {
  title: string;
  left: IconProps;
  right: IconProps;
};

export const Header = ({title, left, right}: HeaderProps) => {
  return (
    <>
      <StatusBar
        //backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <Container>
        <LeftContainer>
          {left ? (
            <Button {...left}>
              <Icon
                {...left.icon}
                //   style={{color: theme.colors.white}}
              />
            </Button>
          ) : null}
        </LeftContainer>

        <TitleContainer>{title ? <Text>{title}</Text> : null}</TitleContainer>

        <RightContainer>
          {right ? (
            <Button {...right}>
              <Icon
                {...right.icon}
                //   style={{color: theme.colors.white}}
              />
            </Button>
          ) : null}
        </RightContainer>
      </Container>
    </>
  );
};

const sidePropTypes = PropTypes.shape({
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func,
});

Header.propTypes = {
  title: PropTypes.string,
  left: sidePropTypes,
  right: sidePropTypes,
};

Header.defaultProps = {
  title: null,
  left: null,
  right: null,
};
