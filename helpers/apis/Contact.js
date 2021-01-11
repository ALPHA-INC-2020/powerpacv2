import Api from './Api'

export default {
    sendMsg(payload) {
        console.log(payload);
        return Api().post('/send/msg', payload);
    },
}