import { api } from './api';

const getCommentByProductIDAPI = (id) => {
    return api("GET", "/comments/productId/"+id, null);
}

  const addNewComment = (cm) => {
    return api("POST", "comments/", cm);
  }


export { getCommentByProductIDAPI,addNewComment };