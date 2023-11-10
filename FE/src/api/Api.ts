import axios from 'axios'

 const url:string ='http://localhost:2005/api/v1/'

 export const getKids = async () => {
    return await axios.get(`${url}/view-sorted-kid`).then((res: any) => {
      return res.data.data;
    });
  };