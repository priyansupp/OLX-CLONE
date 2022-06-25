import classes from './Backdrop.module.css';

function Backdrop(props){
    const clicktohome = props.clickBackdrop;
    return <div className={classes.backdrop} onClick={clicktohome}/>
}

export default Backdrop; 