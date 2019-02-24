import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        users:[
            {
                id: 0,
                name: "boom",
                password: "admin",
                email: "boom@it.com"
            }
        ],
        login: false,
        time_sel: "",
        locationID: 0,
        theater: "a",
        day: "",
        movieID: 0,
        total: 0,
        seats: []
    },
    getters:{
        time_sel: (state) => {
            return state.time_sel
        },
        locationID: (state) => {
            return state.locationID
        },
        theater: (state) => {
            return state.theater
        },
        day: (state) => {
            return state.day
        },
        movieID: (state) => {
            return state.movieID
        },
    },
    matations:{
        SET_TIME_SEL: (state, newValue) => {
            state.time_sel = newValue
          },
        SET_LOCATIONID: (state, newValue) => {
            state.locationID = newValue
          },
          SET_THEATER: (state, newValue) => {
            state.theater = newValue
          },
          SET_DAY: (state, newValue) => {
            state.day = newValue
          },
          SET_MOVIEID: (state, newValue) => {
            state.movieID = newValue
          },
    },
    actions:{
        setTime_sel: ({commit, state}, newValue) => {
            commit('SET_TIME_SEL', newValue)
            return state.time_sel
          },
          setLocationID: ({commit, state}, newValue) => {
            commit('SET_LOCATIONID', newValue)
            return state.locationID
          },
          setTheater: ({commit, state}, newValue) => {
            commit('SET_THEATER', newValue)
            return state.time_sel
          },
          setDay: ({commit, state}, newValue) => {
            commit('SET_DAY', newValue)
            return state.day
          },
          setMovieID: ({commit, state}, newValue) => {
            commit('SET_MOVIEID', newValue)
            return state.movieID
          },
    }
})
global.store = store
export default  store