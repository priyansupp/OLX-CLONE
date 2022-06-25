import classes from './Horizontalbar.module.css';
import Sortitems from './Sortitems';
import Filterbyprice from './Filterbyprice';

const Horizontalbar = () => {
    return (
        <div className={classes.supreme}>
            <span className={classes.dropdown}>
                <button className={classes.dropbtn}>
                    <span className={classes.text}>All Categories</span>
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className={classes.svgicon}><path class="rui-4K4Y7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                </button>
                <div className={classes.dropdowncontent}>
                    <ul>
                        <li>Electronics</li>
                        <li>Hardware</li>
                        <li>Accessories</li>
                        <li>Vehicle</li>
                        <li>Academics</li>
                    </ul>
                </div>
            </span>
            
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
        </div>
    );
}
 
export default Horizontalbar;