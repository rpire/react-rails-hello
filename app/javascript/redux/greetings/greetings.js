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

export const getGreetings = () => async (dispatch) => {
  await fetch('http://localhost:3000/v1/greetings')
    .then((response) => response.json())
    .then((greeting) => dispatch(loadGreeting(greeting)))
    .catch((error) => console.log(error));
}

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return action.payload[Math.floor(Math.random() * 6)];
    default:
      return state;
  }
};

export default greetingsReducer;
