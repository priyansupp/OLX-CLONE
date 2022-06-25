import classes from './Filters.module.css';
import Sortitems from './Sortitems';
import Filterbyprice from './Filterbyprice';

const Filters = () => {
    return (
            <span className={classes.dropdown}>
                <button className={classes.dropbtn}>
                    <span>Filters</span>
                    <img src='https://www.svgrepo.com/show/61952/filter-filled-tool-symbol.svg' width={20} height={20}/>
                </button>
                <div className={classes.dropdowncontent}>
                    <ul>
                        <li><Sortitems increasing='true'/></li>
                        <li><Sortitems increasing='false'/></li>
                        <li><Filterbyprice /></li>
                    </ul>
                </div>
            </span>
    );
}
 
export default Filters;