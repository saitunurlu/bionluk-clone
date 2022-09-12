
import FakeJsonMessages from '../../data/fakeMessages.json'

export default {

    nuxtServerInit(context,appContext) {
        context.dispatch('setMessages',FakeJsonMessages);
        return FakeJsonMessages;


    },
    setMessages(context,payload) {
        context.commit('setMessages',payload);
    },



}