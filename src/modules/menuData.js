import {getCourses} from './network';

const getInit = () =>{

  const getCoursesSodexo =async () => {
     try{
    const data = await getCourses();
    // console.log(data);
    }catch (e) {
       console.log('error' + e);
     }
  };
  getCoursesSodexo();
};
getInit();
const Data = {getInit};

export default Data;
