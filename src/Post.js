export default class Post {
  constructor(title) {
    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      img: this.img,
      date: this.date.toJSON(),
    });
  }

  get uppercaseTitle() {
    return this.title.toUpperCase();
  }
}
