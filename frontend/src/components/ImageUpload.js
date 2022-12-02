import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ImageUpload = () => {

    const location = useLocation();
    const navigate = useNavigate('null');
    const [photo, setPhoto] = useState({ preview: '', data: '' });
    const [signature, setSignature] = useState({ preview: '', data: '' });

    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            navigate('/');
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('photo', photo.data);
        formData.append('signature', signature.data);
        const response = await fetch('http://localhost:5000/api/applicant/photo-upload', {
            method: 'POST',

            headers: {
                'authToken': localStorage.getItem('authToken'),
                'id': location.state.application_id
            },

            body: formData,
        })

        await response.json().then(response => {
            if(response.success === true && response.message === "images successfully uploaded")
                navigate('/applicant/profile');
            else navigate('/');
        })
    }

    const handlePhotoChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setPhoto(img)
    }

    const handleSignatureChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setSignature(img)
    }

    return (
        <div className='container my-4 text-center d-flex justify-content-center'>
            <div className="card col-6">
                <div className="card-header">
                    <p>Image Upload</p>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="col my-2">
                                <label htmlFor="photo" className="form-label">Photo</label>
                                <input type="file" className="form-control data-input" id="photo" name="photo" onChange={handlePhotoChange} required />
                            </div>
                            <div className="col my-2">
                                <label htmlFor="signature" className="form-label">Signature</label>
                                <input type="file" className="form-control data-input" id="signature" name="signature" onChange={handleSignatureChange} required />
                            </div>
                        </div>

                        <div className="my-4">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>

                    <div className="card-footer d-flex justify-content-around">
                        <div>
                            <div>Photo Preview</div>
                            {photo.preview && <img src={photo.preview} width='100' height='100' alt="Unable to display preview at the moment" />}
                        </div>
                        <div>
                            <div>Signature Preview</div>
                            {signature.preview && <img src={signature.preview} width='100' height='100' alt="Unable to display preview at the moment" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;