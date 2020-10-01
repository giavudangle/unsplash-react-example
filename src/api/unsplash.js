import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID D_U7ao3j0K4qEdPgi4gSjC9g87oIVN1BeYr5tNN9FAI'
  }
})