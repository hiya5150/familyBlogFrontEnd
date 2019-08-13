// this class handles posts created by users

export class Post {
  postId: number;
  postTitle: string;
  postBody: string;
  createdOn: string;
  bloggerName: string;
  bloggerId: number;

  constructor(args?) {
    if (args) {
      this.postId = args.post_id;
      this.postTitle = args.post_title;
      this.postBody = args.post_body;
      this.createdOn = args.created_on;
      this.bloggerName = args.blogger_name;
      this.bloggerId = args.blogger_id;
    }
  }



}
