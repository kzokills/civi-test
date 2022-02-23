import {useEffect} from 'react';
import {useDispatch, shallowEqual, useSelector} from 'react-redux';

import {getMessages} from '../../state/reducers/messages';

export default () => {
  const dispatch = useDispatch();
  let {messages} = useSelector(state => {
    return {
      messages: state.messages.messages,
    };
  }, shallowEqual);
  console.log('MESSAGES', messages);
  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return {
    messages,
  };
};
