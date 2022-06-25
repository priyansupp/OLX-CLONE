import classes from './Bodyforsellingpage.module.css';
import logo from '../../assests/Logo.png';
import { useFormik } from "formik";


const Bodyforsellingpage = () => {
    
    const formik = useFormik({          // the useFormik hook takes in object and returns object.
        initialValues: {
            category: "",       // name attribute from input fields
            pro_name: "",
            price: 0,
            dateOfBuying: "",
            myFile: "",
            description: "",
            hostel: "",
            negotiable: ""
        },
        onSubmit: (values) => {
            // console.log(typeof values);
            fetch('http://localhost:4000/ad-api/postAd', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
                credentials: "include"
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Ad posted.");
            })
            .catch(err => console.log("Error in posting Ad. ", err));
        }
    });

    // console.log(formik.values);      // logs in values at every change in any input.

    function Handlereset(){
        if(window.confirm("Are you sure you want to Reset?")){
            formik.handleReset();
        }
    };

    return (
        <div className={classes.main}>
            <div className={classes.image}>
                <img src={logo} width={50} height={50} alt="logo"/>
            </div>
            <p className={classes.title}>
                Post Your Ad
            </p>
            <div>
                <form className={classes.form} encType='multipart/form-data' onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='Category'>Choose Category : </label>
                        <input 
                        className={classes.input} 
                        list='categories' 
                        id='Category' 
                        name='category' 
                        required 
                        onChange={formik.handleChange}
                        value={formik.values.category}/>
                        <datalist id='categories'>
                            <option value="Mobiles">Mobile Phones</option>
                            <option value="Laptops">Laptops of all type</option>
                            <option value="Cycles">Cycles of all type</option>
                            <option value="Mattresses">Mattresses</option>
                            <option value="Others">Others(please specify)</option>
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor='Name'>Product Name : </label>
                        <input 
                        className={classes.input} 
                        type='text' 
                        name='pro_name' 
                        id='Name' 
                        required 
                        onChange={formik.handleChange}
                        value={formik.values.pro_name}/>
                    </div>
                    <div>
                        <label htmlFor='Price'>Price : ₹</label>
                        <input 
                        className={classes.input} 
                        type='number' 
                        id='Price' 
                        name='price' 
                        required 
                        min='1'
                        onChange={formik.handleChange}
                        value={formik.values.price} />
                    </div>
                    <div>
                        <label htmlFor='Date'>Date of Buying</label>
                        <input 
                        className={classes.input} 
                        type='date' 
                        id='Date' 
                        name='dateOfBuying' 
                        required
                        onChange={formik.handleChange}
                        value={formik.values.dateOfBuying}/>
                    </div>
                    <div>
                        <label htmlFor='myfile'>Upload Photo : </label>
                        <input 
                        className={classes.input} 
                        type='file' 
                        id='myfile' 
                        name='myfile' 
                        onChange={formik.handleChange}
                        value={formik.values.myFile}/>
                    </div>
                    <div>
                        <label className={classes.criteria5} htmlFor='hostel'>Select your hostel : </label>
                        <select
                            className={classes.input}
                            id='hostel'
                            name='hostel'
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.hostel}>
                            <option value="Siang Hostel">Siang Hostel</option>
                            <option value="Brahmaputra Hostel">Brahmaputra Hostel</option>
                            <option value="Lohit Hostel">Lohit Hostel</option>
                            <option value="Disang Hostel">Disang Hostel</option>
                            <option value="Kapili Hostel">Kapili Hostel</option>
                            <option value="Kameng Hostel">Kameng Hostel</option>
                            <option value="Umiam Hostel">Umiam Hostel</option>
                            <option value="Barak Hostel">Barak Hostel</option>
                            <option value="Dihing Hostel">Dihing Hostel</option>
                            <option value="Dhansiri Hostel">Dhansiri Hostel</option>
                            <option value="Subhansiri Hostel">Subhansiri Hostel</option>
                            <option value="Disang(Girl's wing) Hostel">Disang(Girl's wing) Hostel</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='description'>Product Description : </label>
                        <textarea 
                        rows='10' 
                        cols='30' 
                        placeholder='Briefly describe your product...' 
                        required id='description' 
                        name='description'
                        onChange={formik.handleChange}
                        value={formik.values.description}></textarea>
                    </div>
                    <div>
                        <input 
                        className={classes.input} 
                        type='checkbox' 
                        id='Negotiation' 
                        name='negotiable'
                        onChange={formik.handleChange}
                        value={formik.values.negotiable}/>
                        <label htmlFor='Negotiation'> Negotiable</label>
                    </div>
                    <div>
                        <button className={classes.reset} type='reset' id="resetbtn" onClick={Handlereset}>Reset</button>
                        <button className={classes.submit} type='submit' onClick={formik.handleSubmit}>PostAd</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
 
export default Bodyforsellingpage;