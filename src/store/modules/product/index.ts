import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { Module } from 'vuex'
import ProductState from './ProductState'
import RootState from '../../RootState'

const productModule: Module<ProductState, RootState> = {
    namespaced: true,
    state: {
      products: {
        list: [],
        total: {
          virtual: 0,
          variant: 0
        }
      },
      appliedFilters: {
        included: {
          tags: [],
          productCategoryNames: []
        },
        excluded: {
          tags: [],
          productCategoryNames: []
        }
      }
    },
    getters,
    actions,
    mutations,
}

export default productModule;