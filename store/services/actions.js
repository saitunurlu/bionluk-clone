


export default {

    nuxtServerInit(context,appContext) {

        return appContext.$axios.get('/api/services').then(res => {
            const servicesData = res.data;
            context.dispatch('setServices',servicesData);
        }).catch(err => {
            console.log(err);
        })


    },
    setServices(context,payload) {
        context.commit('setServices',payload);
    },



}