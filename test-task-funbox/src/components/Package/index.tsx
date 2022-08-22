import { useEffect, useState } from 'react';
import { IPackage } from '../../types';
import { PackageFooter } from '../PackageFooter';
import './index.css';

export const Package = (props: IPackage) => {
    const { status, headerDefault, headerHover, name, type, count, gift, text, weight, footerDefault, footerDisabled, footerSelected } = props;

    const [footer, setFooter] = useState('');
    const [header, setHeader] = useState(headerDefault);
    const [headerColor, setHeaderColor] = useState('#b2b3b2');
    const [colorFooter, setColorFooter] = useState('#ffffff');
    const [background, setBackground] = useState('');
    const [backgroundWeight, setBackgroundWeight] = useState('#1699d9');
    const [packageState, setPackageState] = useState(status);

    useEffect(() => {
        if (packageState === 'default') {
            setFooter(footerDefault);
            setBackground('back-default.png');
            setBackgroundWeight('#1699d9');
            setHeader(headerDefault);
            setHeaderColor('#b2b3b2');
        }
        if (packageState === 'selected') {
            setFooter(footerSelected);
            setBackground('back-selected.png');
            setBackgroundWeight('#d91768');
        }
        if (packageState === 'disabled') {
            setFooter(footerDisabled);
            setColorFooter('#dee35a');
            setBackground('back-disabled.png');
            setBackgroundWeight('#b2b3b2');
        }
    }, [packageState]);

    const onClick = () => {
        if (packageState === 'default') {
            setPackageState('selected');
        }
        if (packageState === 'selected') {
            setPackageState('default');
        }
    };

    const onMouseLeave = () => {
        if (packageState === 'selected') {
            setHeader(headerHover);
            setHeaderColor('#d91768');
        }
    };  

    return (
        <div className="package" style={{backgroundImage: `url(${background})`}} onClick={onClick} onMouseLeave={onMouseLeave}>
            <div className='package-text'>
                <p className="package-header" style={{color: headerColor}}>{header}</p>
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

            <PackageFooter colorFooter={colorFooter} textFooter={footer} />
        </div>
    );
};