import type { NextPage } from 'next';
import { Fragment } from 'react';
import { CLink } from '../components/part';

const Home: NextPage = () => {
    return (
        <Fragment>
            <ul>
                <li>
                    <CLink href={'/hooks'}>Hooks</CLink>
                </li>
                <li>Auth</li>
                <li>
                    <CLink href={'/counter'}>Counter</CLink>
                </li>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
            </ul>
        </Fragment>
    );
};

export default Home;
