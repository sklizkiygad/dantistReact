import React from 'react';

import {Link} from "react-router-dom";

const AdditionalPage = () => {
    return (
        <div>
            <ul>

                <li><Link to={'/registration'}>https://sklizkiygad.github.io/dantistReact/registration</Link></li>
                <li><Link to={'/recover-password'}>https://sklizkiygad.github.io/dantistReact/recover-password</Link></li>
                <li><Link to={'/personal-cabinet'}>https://sklizkiygad.github.io/dantistReact/personal-cabinet</Link></li>
                <li><Link to={'/my-data'}>https://sklizkiygad.github.io/dantistReact/my-data</Link></li>
                <li><Link to={'/feedback'}>https://sklizkiygad.github.io/dantistReact/feedback</Link></li>
                <li><Link to={'/reception'}>https://sklizkiygad.github.io/dantistReact/reception</Link></li>
                <li><Link to={'/reception-calendar'}>https://sklizkiygad.github.io/dantistReact/reception-calendar</Link></li>
                <li> <Link to={'/reception-hour'}>https://sklizkiygad.github.io/dantistReact/reception-hour</Link></li>
                <li><Link to={'/reception-make'}>https://sklizkiygad.github.io/dantistReact/reception-make</Link></li>
            </ul>
        </div>
    );
};

export default AdditionalPage;