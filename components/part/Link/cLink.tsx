import Link from 'next/link';

interface LinkInterface {
    href: '';
    isTarget: false;
    children: '';
}

type propsType = {
    href: String | any;
    isTarget?: Boolean;
    children: any;
};

const CLink = (props: propsType) => {
    const { href, isTarget, children } = props;

    return (
        <Link href={href}>
            <a target={isTarget ? '_blank' : ''}>{children}</a>
        </Link>
    );
};

export default CLink;
