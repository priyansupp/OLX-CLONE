import classes from './Filters.module.css';
import Filterbyprice from './Filterbyprice';

const Filters = (props) => {

    const handleChange = e => {
        props.setFilter({...props.filter, sort: e.target.value});
        console.log(props.filter.sort);
        console.log(e.target.value);
    }

    return (
        <span className={classes.dropdown}>
            <button className={classes.dropbtn}>
                <span>Filters</span>
                <img src='https://www.svgrepo.com/show/61952/filter-filled-tool-symbol.svg' width={20} height={20}/>
            </button>
            <div className={classes.dropdowncontent}>
                <ul>
                    <form>
                        <span>
                            Sort items by price : 
                        </span>
                        <div>
                            <input type='radio' value='inc' id='increasing' name='sort' onClick={handleChange} />
                            <label htmlFor='increasing'>Increasing</label>
                        </div>
                        <div>
                            <input type='radio' value='dec' id='increasing' name='sort' onClick={handleChange} />
                            <label htmlFor='decreasing'>Decreasing</label>
                        </div>
                        <div>
                            <input type='radio' value='clear' id='clear' name='sort' onClick={handleChange} />
                            <label htmlFor='clear'>Clear</label>
                        </div>
                    </form>
                    <li><Filterbyprice /></li>
                </ul>
            </div>
        </span>
    );
}
 
export default Filters;