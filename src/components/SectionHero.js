import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block block-hero outer">
                <div className="inner">
                    {title && (
                        <div className="block-header inner-sm">
                            <h1 className="block-title">{title}</h1>
                        </div>
                    )}
                    {content && <div className="block-content inner-sm">{markdownify(content)}</div>}
                    {actions && (
                        <div className="block-buttons inner-sm">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
