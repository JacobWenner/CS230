export class FriendIcon {
  name: string;
  status: string;
  imagePath: string;

  constructor({
    name,
    status,
    imagePath,
  }: {
    name: string;
    status: string;
    imagePath: string;
  }) {
    this.name = name;
    this.status = status;
    this.imagePath = imagePath;
  }
}
