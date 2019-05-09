import { connect } from 'react-redux';
import BlogDetail from '../components/BlogDetail';

const mapStateToProps = (state) => {
    // We need to find the post whose
    // id was selected.
    const id = state.selectedid;
    const post = state.posts[id];
    return {
        post
    }
};

const makeBlogDetailSmart = connect(
    mapStateToProps
);
const SmartBlogDetail = makeBlogDetailSmart(BlogDetail);

export default SmartBlogDetail;