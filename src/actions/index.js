import jsonPlaceHolder  from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  // * code Refactored
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach( id => dispatch(fetchUser(id)))

  // *
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    // * value is required for this to work step by step
    .value();
}
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts')
  dispatch({ type: "FETCH_POSTS", payload: response.data })
}

export const selectPost = () => ({ type: "SELECT_POST" })

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)
  dispatch({ type: 'FETCH_USER', payload: response.data })
}

// export const fetchUser = id =>
//   dispatch => {
//     _fetchUser(id, dispatch);
// }
// export const _fetchUser = memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`)
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// })