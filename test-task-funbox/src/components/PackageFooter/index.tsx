import { IPackageFooter } from "../../types";
import parse from 'html-react-parser';
import './index.css';

export const PackageFooter = (props: IPackageFooter) => {
    const { colorFooter, textFooter } = props;

    return (
        <div className='package-footer' style={{color: colorFooter}}>{parse(textFooter)}</div>
    );
};