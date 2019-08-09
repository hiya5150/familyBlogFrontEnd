// this class handles posts created by users

export class Post {
  postId: number;
  postTitle: string;
  postBody: string;
  postAuthor: string;
  createdOn: string;

  constructor(args?) {
    if (args) {
      this.postId = args.post_id;
      this.postTitle = args.post_title;
      this.postBody = args.post_body;
      this.postAuthor = args.post_author;
      this.createdOn = args.created_on;
    }
  }



}
