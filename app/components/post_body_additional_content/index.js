// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import {Preferences} from 'mattermost-redux/constants';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getOpenGraphMetadataForUrl} from 'mattermost-redux/selectors/entities/posts';
import {getBool} from 'mattermost-redux/selectors/entities/preferences';

import {ViewTypes} from 'app/constants';
import {getDimensions} from 'app/selectors/device';
import {getTheme} from 'app/selectors/preferences';

import PostBodyAdditionalContent from './post_body_additional_content';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);
    const previewsEnabled = getBool(state, Preferences.CATEGORY_ADVANCED_SETTINGS, `${ViewTypes.FEATURE_TOGGLE_PREFIX}${ViewTypes.EMBED_PREVIEW}`);

    return {
        ...ownProps,
        ...getDimensions(state),
        config,
        openGraphData: getOpenGraphMetadataForUrl(state, ownProps.link),
        showLinkPreviews: previewsEnabled && config.EnableLinkPreviews === 'true',
        theme: getTheme(state)
    };
}

export default connect(mapStateToProps)(PostBodyAdditionalContent);
