const GET_POSTS = 'posts/GET_POST';

export const getPosts = () => {
  return async (dispatch, getState) => {
    console.log(getState(), 'State values');
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    response = await response.json();
    if (response) {
      dispatch({ type: GET_POSTS, payload: response })
    }
  }
}

export default function reducer(
  state = {
    posts: []
  },
  action,
) {
  switch(action.type) {
    case GET_POSTS: {
      // We'll store the posts inside the post state here
      return {
        ...state,
        posts: action.payload
      }
    }
    default:
      return state;
  }
}