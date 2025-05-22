export default class UserDTO {
  constructor(data) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.age = data.age;
    this.password = data.password;
    this.cart = data.cart;
    this.role = data.role || "user";
  }
}
