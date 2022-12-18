import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      breakpointSwiper : {
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        '1440': {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },
      API_URL    : 'https://api.themoviedb.org/3',
      API_KEY    : '049d7d9cf3a66a25084e8a811c55d78d',
    }
  },
  mutations: {},
  actions: {
    async getDataUpComingMovie () {
      const response = await axios.get(`${this.state.API_URL}/movie/upcoming`, { 
        params: { 
          api_key: this.state.API_KEY ,
          page: '1',
        } 
      })
      .then(res => res.data)
      .catch(err => err.data)
      return response.results
    },
    async getDataActionMovie () {
      const response = await axios.get(`${this.state.API_URL}/discover/movie`, { 
        params: { 
          api_key: this.state.API_KEY ,
          page: '1',
          with_genres: '28',
        } 
      })
      .then(res => res.data)
      .catch(err => err.data)
      return response.results
    },
    async getDataTrandingMovie () {
      const response = await axios.get(`${this.state.API_URL}/movie/popular`, { 
        params: { 
          api_key: this.state.API_KEY ,
          page: '2',
        } 
      })
      .then(res => res.data)
      .catch(err => err.data)
      return response.results
    },
    async getDetilMovie ({}, movie_id) {
      const response = await axios.get(`${this.state.API_URL}/movie/${movie_id}`, {
        params: {
          api_key : this.state.API_KEY,
          append_to_response : 'videos'
        }
      })
      .then(res => res.data)
      .catch(err => err.data)
      return response
      
    }
  }
})