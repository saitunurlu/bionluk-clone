
import Vuex from 'vuex';



// services imports
import serviceState from './services/state';
import serviceMutations from './services/mutations';
import serviceGetters from './services/getters';
import serviceActions from './services/actions';


const store = () => {
    return new Vuex.Store({
        modules: {
            services: {
                state:serviceState,
                mutations: serviceMutations,
                actions: serviceActions,
                getters: serviceGetters
            }
        }
    })
}

export default store;