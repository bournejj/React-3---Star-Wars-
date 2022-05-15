### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?

A library for state management
Very useful for managing larger applications with quite a bit of state

- What are three features of the Redux developer tool in Chrome?

Tracing actions
Skipping actions
Jumping to action

- What is a store?

 centralized place where state is stored

- What is a reducer?

They accept two objects: a state and an action
They use the action to produce and return a new state object

- What is an action?

Reducers are not called directly.
Instead, we fire off an action, which is intercepted and processed by a reducer

- What is an action creator?

Abstract the functions that create actions to their own file
A function that creates an action is called an action creator

- How does data flow in a React/Redux application?

You call store.dispatch(action), redux calls the reducer function, root reducer will combine multiple reducers into a single state. Redux store saves the state.

- What is the purpose of the `<Provider>` component?

The provider allows us to access state throughout the whole application

- What is the purpose of the `useSelector` hook? What does it return?

Use selector allows us to access the store 

- Describe the `useDispatch` hook. What do you use it for?

use dispatch allows use to make action calls to the rootReducer

- What is redux-thunk and why would you use it?

It can dispatch multiple times
It can dispatch asynchronously

- What are propTypes?

- Describe the `useCallback` hook.  What is it used for?

allows you to add functions as dependencies to useEffect without hitting infinite render issues

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?

avoids unnecessary re-renders