import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ImageUpload = () => {

    const location = useLocation();
    const navigate = useNavigate('null');
    const [photo, setPhoto] = useState({ preview: '', data: '' });
    const [signature, setSignature] = useState({ preview: '', data: '' });
    const [isReady, setIsReady] = useState(false);
    
    const checkReady = () => {
        if (isReady === false) setIsReady(true);
        else if (isReady === true) setIsReady(false);
    }

    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            navigate('/');
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let confirmation =  window.prompt("No further changes to the form will be possible. Do you want to submit?(Yes/No)");
        if (!(confirmation.toUpperCase() === 'yes'.toUpperCase()))
            return;
        let formData = new FormData();
        formData.append('photo', photo.data);
        formData.append('signature', signature.data);
        const response = await fetch('http://127.0.0.1:5000/api/applicant/photo-upload', {
            method: 'POST',

            headers: {
                'authToken': localStorage.getItem('authToken'),
                'id': location.state.application_id
            },

            body: formData,
        })

        await response.json().then(response => {
            if (response.success === true && response.message === "images successfully uploaded")
                navigate('/applicant/profile');
            else navigate('/');
        })
    }

    const handlePhotoChange = (e) => {
        const acceptedImageTypes = ['image/jpg', 'image/jpeg'];
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        if (e.target.files[0].size < 10000 || e.target.files[0].size > 500000) {
            error('Photo size must less than 500kb');
            e.target.value = null;
            return;
        }
        if (!acceptedImageTypes.includes(e.target.files[0].type)) {
            error('Uploaded file must be in JPG/JPEG format');
            e.target.value = null;
            return;
        }

        let preview = new Image();
        let objectUrl = URL.createObjectURL(e.target.files[0]);
        preview.onload = function () {

            if (this.width > 1200 || this.height > 1200) {
                error('Required dimensions: 276 x 118');
                e.target.value = null;
                return;
            }

            URL.revokeObjectURL(objectUrl);
        };
        preview.src = objectUrl;

        setPhoto(img)

    }

    const handleSignatureChange = (e) => {
        const acceptedImageTypes = ['image/jpg', 'image/jpeg'];
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }

        if (e.target.files[0].size < 10000 || e.target.files[0].size > 500000) {
            error('Signature size must less than 500kb');
            e.target.value = null;
            return;
        }
        if (!acceptedImageTypes.includes(e.target.files[0].type)) {
            error('Uploaded file must be in JPG/JPEG format');
            e.target.value = null;
            return;
        }

        let preview = new Image();
        let objectUrl = URL.createObjectURL(e.target.files[0]);
        preview.onload = function () {

            if (this.width > 2760 || this.height > 1108) {
                error('Required dimensions: 276 x 118');
                e.target.value = null;
                return;
            }

            URL.revokeObjectURL(objectUrl);
        };
        preview.src = objectUrl;

        setSignature(img)
    }

    const error = (error) => {
        alert(`${error}`)
    }

    return (
        <div className='container my-4 d-flex justify-content-center'>
            <div className="card col-6">
                <div className="card-header text-center">
                    <p>Image Upload</p>
                </div>

                <div className="card-body">

                    <div>
                        <strong>Instructions to be followed for file upload:</strong>
                        <ol type="i">
                            <li>File size for both signature and photo should be less than 500kb.</li>
                            <li>Dimensions of photo: 1200 x 1200 (maximum)</li>
                            <li>Dimensions signature photo: 1200 x 1200 (maximum)</li>
                        </ol>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="col my-2">
                                <label htmlFor="photo" className="form-label"><strong>Photo</strong></label>
                                <input type="file" className="form-control data-input" id="photo" name="photo" onChange={handlePhotoChange} required />
                            </div>
                            <div className="col my-2">
                                <label htmlFor="signature" className="form-label"><strong>Signature</strong></label>
                                <input type="file" className="form-control data-input" id="signature" name="signature" onChange={handleSignatureChange} required />
                            </div>
                        </div>

                        <div className="py-4">
                            <div><strong>Declaration</strong></div>

                            <input type="checkbox" name="check" id="check" onClick={checkReady} />

                            <span> I, hereby declare that all the statements/particulars made/furnished in this application are true, complete and correct to the best of my knowledge and belief. I also declare and fully understand that in the event of any information furnished being found false or incorrect at any stage, my application/candidature is liable to be summarily rejected and if I am already appointed,  my services are liable to be terminated without any notice from the post.</span>

                        </div>

                        <div className="my-3">
                            <button className="btn btn-success" disabled={!isReady} >Submit</button>
                        </div>
                    </form>

                    <div className="card-footer d-flex justify-content-around">
                        <div>
                            <div>Photo Preview</div>
                            {photo.preview && <img src={photo.preview} width='100' height='100' id="photo-preview" alt="Unable to display preview at the moment" />}
                        </div>
                        <div>
                            <div>Signature Preview</div>
                            {signature.preview && <img src={signature.preview} width='100' height='100' id="signature-preview" alt="Unable to display preview at the moment" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;