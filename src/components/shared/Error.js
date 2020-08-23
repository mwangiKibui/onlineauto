import React from 'react';

//third-party
import {Card,CardContent} from '@material-ui/core';

const Error = ({message}) => {
    return (
        <div className="error-card">
            <Card className="error-card-root">
                <CardContent>
                    <p>{message}</p>
                </CardContent>
            </Card>
        </div>
    )
};

export default Error;