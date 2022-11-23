import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className='card col-4 my-4'>
                <p className="card-header text-center">Reset Password</p>
                <div className="card-body text-center">
                    <div className="col form-group">
                        <label><strong>First Name </strong><small style={{ color: 'red' }}>*</small></label>
                        <input className="form-control" maxLength="30" type="text" id="firstname" name="firstname" style={{ textTransform: 'uppercase' }} />
                    </div>

                    <div className="col form-group">
                        <label><strong>Middle Name </strong></label>
                        <input className="form-control" maxLength="30" type="text" id="middlename" name="middlename" style={{ textTransform: 'uppercase' }} />
                    </div>
                    <div className="col form-group">
                        <label><strong>Last Name </strong><small style={{ color: 'red' }}>*</small></label>
                        <input className="form-control" maxLength="30" type="text" id="lastname" name="lastname" style={{ textTransform: 'uppercase' }} />
                    </div>

                    <div className="col form-group">
                        <label><strong>Dob DD-MM-YYYY </strong><small style={{ color: 'red' }}>*</small></label>
                        <input className="form-control" type="date" id="dob" name="dob" />
                    </div>

                    <div className='form-group'>
                        <input type="submit" className="btn btn-success btn-sm my-3" id='submit' name='password' value='Submit' />
                    </div>

                    <div className="card-footer">
                        Registration ID and new password will be shared with you via email after successful password reset
                        <br />
                        <br />
                        <div className="col">
                            <Link to="/" className="btn btn-primary btn-sm">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword;