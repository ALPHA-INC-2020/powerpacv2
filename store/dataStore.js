/* eslint-disable no-console */
export const state = () => ({
    routeName: ''
})

export const mutations = {
    SET_ROUTE_NAME(state, name) {
        state.routeName = name
        console.log(name)
    }
}

export const actions = {
    setRouteName({
        commit
    }, name) {
        commit('SET_ROUTE_NAME', name)
    }
}

export const getters = {
    getRouteName(state) {
        console.log(state)
        return state.routeName
    }
}