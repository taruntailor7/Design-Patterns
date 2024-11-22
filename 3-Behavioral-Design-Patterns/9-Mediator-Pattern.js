class ChatRoom {
  showMessage(user, message) {
    console.log(`${user.getName()}: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  getName() {
    return this.name;
  }

  sendMessage(message) {
    this.chatRoom.showMessage(this, message);
  }
}

const chatRoom = new ChatRoom();
const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);

user1.sendMessage("Hello, Bob!"); // Alice: Hello, Bob!
user2.sendMessage("Hello, Alice!"); // Bob: Hello, Alice!
