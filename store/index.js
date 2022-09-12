
import Vuex from 'vuex';



// services imports
import serviceState from './services/state';
import serviceMutations from './services/mutations';
import serviceGetters from './services/getters';
import serviceActions from './services/actions';

// categories imports
import categoryState from './categories/state'
import categoryMutations from './categories/mutations'
import categoryActions from './categories/actions';
import categoryGetters from './categories/getters';

//messages imports
import messageState from './messages/state';
import messageMutations from './messages/mutations';
import messageActions from './messages/actions';
import messageGetters from './messages/getters';

const store = () => {
    return new Vuex.Store({
        modules: {
            services: {
                state:serviceState,
                mutations: serviceMutations,
                actions: serviceActions,
                getters: serviceGetters
            },
            categories: {
                state:categoryState,
                mutations:categoryMutations,
                actions:categoryActions,
                getters:categoryGetters
            },
            messages: {
                state:messageState,
                mutations:messageMutations,
                actions:messageActions,
                getters:messageGetters
            }
        }
    })
}

export default store;