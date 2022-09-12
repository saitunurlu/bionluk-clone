


export default {

    nuxtServerInit(context,appContext) {

        return appContext.$axios.get('/api/get_all_data').then(res => {
            const categoriesData = res.data;
            context.dispatch('setCategories',categoriesData);
        }).catch(err => {
            console.log(err);
        })


    },
    setCategories(context,payload) {
        context.commit('setCategories',payload);
    },



}