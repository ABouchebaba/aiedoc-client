import { SET_TOPICS, LOADING_TOPICS } from "../constants/ActionTypes";

export const getTopics = articles => dispatch => {
  dispatch({ type: LOADING_TOPICS });

  let topics = [];
  articles.map(article => {
    if (topics[article.group_nb]) {
      topics[article.group_nb] = [...topics[article.group_nb], article];
    } else {
      topics[article.group_nb] = [article];
    }
  });

  let count = 0;
  topics = topics.filter(a => a.length > 1 && count++ < 20);

  return dispatch({
    type: SET_TOPICS,
    data: topics
  });
};
