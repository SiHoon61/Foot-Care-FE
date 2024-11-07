export interface SignupResponse {
  message: string;
}

export interface Post {
  postId: number;
  categoryId: number;
  postName: string;
  postContentName: string;
  postDate: string;
  postView: number;
  likeCount: number;
}

export interface Comment {
  commentId: number;
  postId: number;
  commentContent: string;
  commentDate: string;
}
