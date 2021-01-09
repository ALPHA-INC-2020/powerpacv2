import FAQ from '@/helpers/apis/FAQ'

export const state = () => ({
    faqs: []
})

export const mutations = {
    SET_FAQS(state, payload) {
        state.faqs = payload.data
    }
}

export const actions = {
    setAllFaqs({ commit }) {
        return FAQ.getAllFaqs().then(({ status, data }) => {
            if (status === 200) {
                commit('SET_FAQS', data)
            }
        })
    }

}

export const getters = {
    getFaqs(state) {
        return state.faqs
    }
}