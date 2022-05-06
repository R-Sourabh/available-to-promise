import { MutationTree } from 'vuex'
import ProductState from './ProductState'
import * as types from './mutation-types'

const mutations: MutationTree <ProductState> = {
  [types.PRODUCT_LIST_UPDATED] (state, payload) {
    state.products.list = payload.products;
    state.products.total.variant = payload.totalVariant;
    state.products.total.virtual = payload.totalVirtual;
  },
  [types.PRODUCT_APPLIED_FILTERS_UPDATED] (state, payload) {
    (state.appliedFilters as any)[payload.type][payload.id] = payload.value
  }
}
export default mutations;