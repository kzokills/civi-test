/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useState} from 'react';
import {Text, List, Button} from 'native-base';

import {Header} from '../../components';
import {
  ListItem,
  Body,
  Right,
} from '../home/messages-list/messages-list.styles';

import {useDispatch} from 'react-redux';
import {messageSeen, messageNotSeen} from '../../state/reducers/messages';
import useHome from './useHome';
import {MessageDetails} from './message-details/message-details';
import {ButtonsWrapper} from './message-details/message-details.styles';

export const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const {messages} = useHome();
  const [showDetails, setShowDetails] = useState(false);
  const [currentMessage, setCurrentMessage] = useState({});

  const onPress = (index: number, message: any) => {
    const data = {index};
    dispatch(messageSeen(data));
    setCurrentMessage({message, index});
    setShowDetails(true);
  };

  const setAsUnread = (data: any) => {
    const {message, index} = data;
    const id = message.id;
    dispatch(messageNotSeen({id, index}));
  };

  const renderModal = (message: any): ReactElement | null => {
    if (!showDetails) {
      return null;
    }
    return (
      <>
        <ButtonsWrapper>
          <Button
            backgroundColor={'danger.400'}
            onPress={() => setShowDetails(false)}>
            Voltar
          </Button>
          <Button onPress={() => setAsUnread(message)}>
            Marcar não como lida
          </Button>
        </ButtonsWrapper>
        <MessageDetails message={message} />
      </>
    );
  };

  return (
    <>
      <Header title="TESTE CIVI" />
      {messages ? (
        <List>
          {messages?.map((message, index) => (
            <ListItem
              style={message.isSeen ? {backgroundColor: 'grey'} : null}
              key={message.id}>
              <Body>
                <Text>{message.subject}</Text>
                <Text numberOfLines={1}>{message.details}</Text>
              </Body>
              <Right>
                <Button onPress={() => onPress(index, message)}>
                  <Text>Ver mais</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      ) : null}
      {renderModal(currentMessage)}
    </>
  );
};
