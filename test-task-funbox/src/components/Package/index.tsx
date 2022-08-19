import { IPackage } from '../../types';
import './index.css';

export const Package = (props: IPackage) => {
    const { header, name, type, count, gift, text, weight } = props;

    return (
        <div className="package">
            <div className='package-text'>
                <p className="package-header">{header}</p>
                <h2 className="package-name">{name}</h2>
                <h3 className="package-type">{type}</h3>
                <p className='count' >{count}</p>
                <p className='gift'>{gift}</p>
                <p className='text'>{text}</p>

                <div className='weight'>
                    <p className='weight-number'>{weight}</p>
                    <p className='weight-text'>кг</p>
                </div>
            </div>
        </div>
    );
};