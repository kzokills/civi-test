import React, {ReactElement} from 'react';
import {Text} from 'native-base';

import {MessageDetailsWrapper} from './message-details.styles';

export const MessageDetails = (message: any): ReactElement => {
  const currentMessage = message.message;
  return (
    <MessageDetailsWrapper>
      <Text style={{margin: 10}}>{currentMessage.message.subject}</Text>
      <Text>{currentMessage.message.details}</Text>
    </MessageDetailsWrapper>
  );
};
