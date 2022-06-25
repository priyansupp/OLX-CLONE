import classes from './Horizontalbar.module.css';
import Categories from './Categories';
import Filters from './Filters';

const Horizontalbar = (props) => {
    return (
        <div>
            <Categories setCategory={props.setCategory} />
            <Filters setFilter={props.setFilter} filter={props.filter} />
        </div>
    );
}
 
export default Horizontalbar;