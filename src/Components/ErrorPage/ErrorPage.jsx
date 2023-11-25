import { Link } from 'react-router-dom';
import error from '../../assets/404-error-page-not-found-design-template-vector-21393147.jpeg'

const ErrorPage = () => {
    return (
        <div >
            <div className='lg:ml-96'>
            <img src={error} alt="" />
            </div>
            <div>
               <Link to="/"> <button  className='btn lg:ml-[850px] border-none btn-secondary bg-red-500 hover:bg-red-600'>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;