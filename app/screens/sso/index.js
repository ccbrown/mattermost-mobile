// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getSession, handleSuccessfulLogin} from 'app/actions/views/login';
import {getTheme} from 'app/selectors/preferences';

import {setStoreFromLocalData} from 'mattermost-redux/actions/general';

import SSO from './sso';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ...state.views.selectServer,
        theme: getTheme(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getSession,
            handleSuccessfulLogin,
            setStoreFromLocalData
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SSO);
