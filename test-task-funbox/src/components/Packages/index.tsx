import { Package } from "../Package";
import './index.css';

export const  Packages = () => {
    return (
        <div className="main">
            <h1 className='head'>Ты сегодня покормил кота?</h1>
            <div className="packages">
                <Package />
                <Package />
                <Package />
            </div>
        </div>
    );
}