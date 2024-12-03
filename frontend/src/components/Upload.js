import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from "react-router-dom";


const Upload = () => {
    const navigate = useNavigate() ;

    const token = localStorage.getItem('registerToken');
    console.log(token)
   
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        event.preventDefault();

        if (!file) {
            setMessage('Please select a file!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            
            const response = await api.post('auth/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            setMessage(response.message || 'File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file.');
        }
    };
    if(token == null){
        navigate("/register")
        return (
            <div className='dashboard'>
                please only register usr can upload files 
            </div>
        )
    }
    else{
    return (
        <div>
            <h1>Upload JPG File</h1>
            <form onSubmit={handleUpload}>
                <input type="file" accept=".jpg" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
};

export default Upload;
