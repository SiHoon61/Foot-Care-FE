import { clientApi } from 'api/clientApi';
import { API_POSTS, API_POSTS_CATEGORY, API_POSTS_COMMENT } from 'api/constant';
import { Post, Comment } from 'api/models/response';
import { AddComment } from 'api/models/request';

async function getPosts(postId: number) {
  try {
    const res = await clientApi.get<Post>(`${API_POSTS}/${postId}`);
    if (res.status !== 200) throw new Error(`Unexpected status code: ${res.status}`);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

async function getPostsByCategory(categoryId: number) {
  try {
    const res = await clientApi.get<Post[]>(`${API_POSTS_CATEGORY}/${categoryId}`);
    if (res.status !== 200) throw new Error(`Unexpected status code: ${res.status}`);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

async function getComment(postId: number) {
  try {
    const res = await clientApi.get<Comment[]>(`${API_POSTS_COMMENT}/${postId}`);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

async function postComment(postId: number, comment: AddComment) {
  try {
    const res = await clientApi.post(`${API_POSTS_COMMENT}/${postId}`, comment);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

async function likePost(postId: number) {
  try {
    const res = await clientApi.put(`${API_POSTS}/${postId}/like`);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

async function unlikePost(postId: number) {
  try {
    const res = await clientApi.put(`${API_POSTS}/${postId}/unlike`);
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '문제 발생');
  }
}

export { getPosts, getPostsByCategory, getComment, postComment, likePost, unlikePost };
