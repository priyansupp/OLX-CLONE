import classes from './SignUpPage.module.css';
import { useFormik } from "formik";
import logo from '../assests/Logo.png';


function SignUpPage(props) {

    const formik = useFormik({
        initialValues: {
            Email: '',
            Password: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    // console.log(formik.values);

    return (
        <div>
            <div>
                <span className={classes.head}>
                    <p>Sign up</p>
                    <p>It takes just a minute!</p>
                    <img src={logo}  alt="logo"/>
                </span>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label className={classes.criteria1} htmlFor='Name'>Enter Your Name</label>
                            <br />
                            <input
                                className={classes.input1a}
                                id='FirstName'
                                name='FirstName'
                                type="text"
                                placeholder="First Name"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.FirstName} />
                            <input
                                className={classes.input1b}
                                id='LastName'
                                name='LastName'
                                type="text"
                                placeholder="Last Name"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.LastName} />
                        </div>
                        <div className='age-gender'>
                            <label className={classes.criteria2} htmlFor='age'>Age </label>
                            <label className={classes.criteria3} htmlFor='age'>Gender</label>
                            <br />
                            <input
                                className={classes.input2}
                                id='age'
                                name='age'
                                type="number"
                                min='17'
                                placeholder="Enter your age"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.age} />

                            <select
                                className={classes.input3}
                                id='Gender'
                                name='Gender'
                                type='number'
                                required
                                onChange={formik.handleChange}
                                value={formik.values.Gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label className={classes.criteria4} htmlFor='profilePicture'>Upload Profile Picture</label>
                            <br />
                            <input
                                className={classes.input4}
                                id='profilePicture'
                                name='profilePicture'
                                type="file"
                                accept='image/png, image/jpg, image/jpeg'
                                required
                                onChange={formik.handleChange}
                                value={formik.values.profilePicture} />
                        </div>
                        <div>
                            <label className={classes.criteria6} htmlFor='Department'>Department</label>
                            <br />
                            <input
                                className={classes.input6}
                                id='Department'
                                name='Department'
                                type='text'
                                placeholder="Enter your Department"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.department} />
                        </div>
                        <div>
                            <label className={classes.criteria7} htmlFor='phone'>Phone Number</label>
                            <br />
                            <input
                                className={classes.input7}
                                id='phone'
                                name='phone'
                                type="tel"
                                pattern="[6-9]{1}[0-9]{9}"
                                placeholder="Enter your 10 digits phone number"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.phone} />
                        </div>
                        <div>
                            <label className={classes.criteria8} htmlFor='email'>Enter Your Mail-Id</label>
                            <br />
                            <input
                                className={classes.input8}
                                id='email'
                                name='Email'
                                type="email"
                                placeholder="include@iitg.ac.in"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.Email} />
                        </div>
                        <div>
                            <label className={classes.criteria9} htmlFor='pass'>Enter Password</label>
                            <br />
                            <input
                                className={classes.input9}
                                id='pass'
                                name='Password'
                                type="password"
                                placeholder='********'
                                required
                                onChange={formik.handleChange}
                                value={formik.values.Password} />
                        </div>
                    </form>
                </div>
                <div clssName={classes.buttons}>
                    <button type='submit' onClick={formik.handleSubmit} className={classes.btn}>Sign Up</button>
                    <button type='reset' onClick={formik.handleReset} className={classes.btn}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;

