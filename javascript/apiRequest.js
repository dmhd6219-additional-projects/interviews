/**

 Необходимо сделать вызовы к внешнему API мессенджера,
 чтобы получить данные, нужные для отрисовки пользовательского UI.
 Если не смогли получить токен - не нужно пытаться
 получить другую информацию.
 Если какой-то из запросов, кроме login, выполнился с ошибкой,
 то нужно вернуть undefined вместо данных.
 Нужно вернуть объект следующего вида:
 {
 username,
 avatar,
 chats,
 messages // список сообщений для первого чата, если есть хотя бы один чат
 }
 */


function login() {
    return Promise.resolve("token")
} // returns Promise with token
function getChats(token) {
    return Promise.resolve("chat")
} // returns Promise with permissions
function getUserName(token) {
    return Promise.resolve("name")
} // returns Promise with username
function getAvatar(token) {
    return Promise.resolve("avt")
} // returns Promise with image
function getMessages(token, chatId) {
    return Promise.resolve("msgs")
} // returns Promise with messages


async function request() {
    const token = await login();
    if (!token) {
        throw new Error("token not found")
    }

    return Promise.allSettled([getChats(token), getUserName(token), getAvatar(token)]).then(async ([chats, name, avatar]) => {
        let chatsData = undefined;
        let nameData = undefined;
        let avatarData = undefined;
        let msgsData = undefined;

        if (chats.status === "fulfilled") {
            chatsData = chats.value;
            if (chats.value) {
                msgsData = await getMessages(token, chats.value);
            }
        }

        if (name.status === "fulfilled") {
            nameData = name;
        }

        if (avatar.status === "fulfilled") {
            avatarData = avatar.value;
        }

        return {
            username: nameData,
            avatar: avatarData,
            chats: chatsData,
            messages: msgsData
        }

    })

}