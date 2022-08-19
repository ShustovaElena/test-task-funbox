import { useEffect, useState } from 'react';
import { IPackage } from '../../types';
import './index.css';

export const Package = (props: IPackage) => {
    const { status, header, headerHover, name, type, count, gift, text, weight, footerDefault, footerDisabled, footerSelected } = props;

    const [footer, setFooter] = useState('');
    const [colorFooter, setColorFooter] = useState('#ffffff');
    const [background, setBackground] = useState('');
    const [backgroundWeight, setBackgroundWeight] = useState('#1699d9');

    useEffect(() => {
        if (status === 'default') {
            setFooter(footerDefault);
            setBackground('back-default.png');
            setBackgroundWeight('#1699d9');
        }
        if (status === 'selected') {
            setFooter(footerSelected);
            setBackground('back-selected.png');
            setBackgroundWeight('#d91768');
        }
        if (status === 'disabled') {
            setFooter(footerDisabled);
            setColorFooter('#dee35a');
            setBackground('back-disabled.png');
            setBackgroundWeight('#b2b3b2');
        }
    }, [footer]);

    return (
        <div className="package" style={{backgroundImage: `url(${background})`}}>
            <div className='package-text'>
                <p className="package-header">{header}</p>
                <h2 className="package-name">{name}</h2>
                <h3 className="package-type">{type}</h3>
                <p className='count' >{count}</p>
                <p className='gift'>{gift}</p>
                <p className='text'>{text}</p>

                <div className='weight' style={{backgroundColor: backgroundWeight}}>
                    <p className='weight-number'>{weight}</p>
                    <p className='weight-text'>кг</p>
                </div>
            </div>

            <p className='package-footer' style={{color: colorFooter}}>{footer}</p>
        </div>
    );
};