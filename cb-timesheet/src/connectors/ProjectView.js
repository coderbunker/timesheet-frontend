import * as ReactRedux from 'react-redux';
import Container from '../containers/ProjectView';

const logic = function(type,payload) {
  return {type,payload}
}

export default ReactRedux.connect(
  (state)=>{
    return {
      state: state.curation,
      global: state.global
    }
  }, {
    logic,
  }) (Container);