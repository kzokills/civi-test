import {createSlice} from '@reduxjs/toolkit';

import {Messages} from '../../entities/messages';

export const MESSAGES_BASE_URL = '/articles';

interface MessagesState {
  loading: boolean;
  error: object;
  messages: Messages;
}

const initialState: MessagesState = {
  loading: false,
  error: {},
  messages: [{}],
};

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messagesStart(state) {
      state.loading = true;
      state.error = {};
    },
    messagesSuccess(state) {
      state.loading = false;
      state.error = {};
    },
    messagesSet(state, action) {
      const {data} = action.payload;
      state.messages = data;
    },
    messagesFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    messagesClean(state) {
      state.messages = initialState.messages;
    },
    messageSeen(state, action) {
      const {index} = action.payload;
      state.messages[index] = {...state.messages[index], isSeen: true};
    },
    messageNotSeen(state, action) {
      const {id, index} = action.payload;
      state.messages[index] = {
        ...state.messages.find(message => message.id === id),
        isSeen: false,
      };
    },
  },
});

export const {
  messagesStart,
  messagesSuccess,
  messagesSet,
  messagesFailure,
  messagesClean,
  messageSeen,
  messageNotSeen,
} = messages.actions;
export default messages.reducer;

export const getMessages =
  () =>
  async (dispatch, _, {api}) => {
    try {
      dispatch(messagesStart());
      const data = await api.get(MESSAGES_BASE_URL);
      dispatch(messagesSet(data));
      dispatch(messagesSuccess());
    } catch (error) {
      dispatch(messagesFailure({error: error.message}));
    }
  };
