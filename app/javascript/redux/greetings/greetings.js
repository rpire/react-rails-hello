const LOAD_GREETING = 'App/greetings/LOAD_GREETING';

const url = 'http://localhost:3000/v1/greetings';

const initialState = {
  id: 777,
  greeting: 'This page greets you!',
};

export const loadGreeting = (payload) => ({
  type: LOAD_GREETING,
  payload,
});

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
