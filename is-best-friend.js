function isBestFriend() {

    if (o1.name === o2.friend && o2.name === o1.friend) {
        return true;
    }
    return false;
}

const o1 = { name: "abul", friend: "kabul" };
const o2 = { name: "kabul", friend: "abul" };
console.log(isBestFriend(o1, o2));