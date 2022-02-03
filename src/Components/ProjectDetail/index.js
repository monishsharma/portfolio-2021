import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ProjectDetails from "./component";

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
