import Product from '@/helpers/apis/Products'
export const state = () => ({
    allProducts: [],
    popularProducts: [],
    newReleasedProducts: []
})

export const mutations = {
    SET_PRODUCTS(
        state, data) {
        state.allProducts = data
    },
    SET_POPULAR_PRODUCTS(state, data) {
        state.popularProducts = data
    },
    SET_NEW_RELEASED_PRODUCTS(state, data) {
        state.newReleasedProducts = data;
    }
}

export const actions = {
    setProducts({
        commit,
        state
    }) {
        if (state.allProducts.length < 1) {
            return Product.getAllProducts().then(res => {
                console.log('dataloaded');
                if (res.status === 200) {
                    commit('SET_PRODUCTS', res.data[1]);
                } else {
                    console.log("Error on fetching data")
                }
            }).catch(e => console.log(e))
        }
    },
    setPopularProducts({
        commit,
        state
    }) {
        if (state.popularProducts.length < 1) {
            Product.getAllPopularProducts().then(res => {
                if (res.status === 200) {
                    commit('SET_POPULAR_PRODUCTS', res.data)
                } else {
                    console.log("Error on fetching popular products")
                }
            })
        }
    },
    setNewReleasedProducts({
        commit,
        state
    }) {
        if (state.newReleasedProducts.length < 1) {
            Product.getNewReleasedProducts().then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    commit('SET_NEW_RELEASED_PRODUCTS', res.data)
                }
            })
        }
    }
}


export const getters = {
    getProducts: (state) => (name) => {
        return state.allProducts.filter(product => product.type == name);
    },
    getPopularProducts: (state) => {
        return state.popularProducts;
    },
    getNewReleasedProducts: (state) => {
        return state.newReleasedProducts;
    },
    getProductByModel: (state) => (model) => {
        return state.allProducts.filter(product => product.model.split(' ').join('_') == model);
    }
}