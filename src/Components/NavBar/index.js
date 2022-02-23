import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "./component";
import { toggleNav } from "../../store/reducers/nav/actions"


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleNavConnect: toggleNav
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
