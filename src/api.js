//https://rickandmortyapi.com/api
import axios from 'axios'

export default {
  collection: {
    getCollection: (page='') => axios.get('https://rickandmortyapi.com/api/episode/'.concat('',page)).then( res => res ),
    //checkOne: () => axios.get('/auth/check').then( res => res.data),
    //initUser: () => axios.get('/user').then( res => res.data.user ),
    //addLocation: data => axios.post('/user/location', { data }).then( res => {
    //  console.log(res)
    //  return res.data.id
    //} ),
    //updateLocation: (data,id) => axios.post('/user/location/'+id, { data }).then( res => res.data ),
    ////locationFac: loc => axios.post('/user/facs', {ids:loc}).then( res => res.data )
  }
}
