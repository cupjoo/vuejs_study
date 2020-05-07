import Article from '../components/Article'
import { connect } from 'react-redux'

export default connect((state) => {
  let title, desc;
  
  if(state.mode === 'WELCOME'){
    title = state.welcome_content.title;
    desc = state.welcome_content.desc;
  } else {
    const content = state.contents.find(x => x.id === state.selected_content_id);
    title = content.title;
    desc = content.desc;
  }
  return {
    title: title,
    desc: desc
  };
})(Article);
