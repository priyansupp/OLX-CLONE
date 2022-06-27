import classes from './Categories.module.css';
import { useState } from 'react';
import search from '../../assests/search.png'

const Categories = (props) => {

    const [category, setCategory] = useState('All');

    const ChangeHandler = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }
    const SubmitHandler = () => {
        console.log(category);
        props.setCategory(category);
    }

    return (
            <span className={classes.dropdown}>
                {/* <label htmlFor='categories' className={classes.dropbtn}>
                    <span className={classes.text}>Choose a category : </span>
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className={classes.svgicon}><path class="rui-4K4Y7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                </label> */}
                <select value={category} onChange={ChangeHandler} id='categories' name='categories'>
                    <option value="All" className={classes.categ}>All Categories</option>
                    <option value="Mobiles" className={classes.categ}>Mobiles</option>
                    <option value="Laptops" className={classes.categ}>Laptops</option>
                    <option value="Cycles" className={classes.categ}>Cycles</option>
                    <option value="Books" className={classes.categ}>Books</option>
                    <option value="Mattresses" className={classes.categ}>Mattresses</option>
                </select>
                <button type='submit' onClick={SubmitHandler}><img src={search}></img></button>
            </span>
    );
}
 
export default Categories;