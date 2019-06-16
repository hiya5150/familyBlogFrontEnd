// this class handles users
export class User {
  id: number;
  name: string;
  username: string;
  password: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.username = args.username;
      this.password = args.password;

    }
  }
}
