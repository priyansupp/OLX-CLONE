import { Link } from "react-router-dom";
import headerbarclasses from './HeaderforPostad.module.css';
import logo from '../../assests/Logo.png';

const HeaderforPostad = (props) => {
    const clickforarrowicon = props.clickbackarrow;
    return (
        <div className={headerbarclasses.header}>
            <div className={headerbarclasses.flexcontainer}>
                <Link to='/'>
                <button className={headerbarclasses.item1}>
                    <img src="https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png" width={30} height={30} />
                </button>
                </Link>
            
                <div className={headerbarclasses.item2}>
                    <Link to='/'>
                    <img src={logo} height={40} width={60} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderforPostad; 