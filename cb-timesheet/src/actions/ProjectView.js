import axios from 'axios';
import { createLogic } from 'redux-logic';

const ProjectViewLoad = createLogic({
  type: 'PROJECT_VIEW_LOAD_DATA',
  latest: true,
  // warnTimeout: 0,
  async process({ httpClient, action, logic }, dispatch, done){
    try {
      //const allProjects = await axios.get('');
      //const payload = {};
      dispatch(logic('PROJECT_VIEW_SET_STATE', {
        allData: {}
      }));
    } catch (error){

    } finally {
      done();
    }
  }
});

export default [ProjectViewLoad];