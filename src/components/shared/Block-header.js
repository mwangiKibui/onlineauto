import React from 'react';

const BlockHeader = ({title}) => {
    return (
        <div className="block-header">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">

                    <h4 className="block-header-title">{title}</h4>

                </div>
            </div>
        </div>
    )
};

export default BlockHeader;