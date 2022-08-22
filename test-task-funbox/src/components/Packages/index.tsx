import { Package } from "../Package";
import { data } from "../../data";
import './index.css';
import { IPackage } from "../../types";

export const  Packages = () => {
    return (
        <div className="main">
            <h1 className='head'>Ты сегодня покормил кота?</h1>
            <div className="packages">
                {data.map((item: IPackage, index) => {
                    return (
                    <Package {...item} key={index} />
                    );
                })}
            </div>
        </div>
    );
}