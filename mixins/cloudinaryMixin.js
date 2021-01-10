import axios from 'axios'

const cloudinary_url = 'https://api.cloudinary.com/v1_1/powerpacmm/image/upload'
const cloudinary_upload_preset = 'gkyzdj7b'
const cloudinary_api_key = 744239118166388
export default {

    methods: {
        uploadFileToCloudinary(file, folderName) {
            return new Promise((resolve, reject) => {
                var formData = this.prepareFormData(file, folderName);
                axios({
                    method: 'POST',
                    url: cloudinary_url,
                    data: formData
                }).then(res => {
                    if (res.status === 200) {
                        resolve(res.data.secure_url)
                    } else {
                        console.log('error on uploading banner')
                        reject(file)
                    }
                }).catch(e => console.log('error' + e))
            })
        },
        prepareFormData(file, folderName) {
            let formData = new FormData();
            formData.append('upload_preset', cloudinary_upload_preset);
            formData.append("api_key", cloudinary_api_key);
            formData.append('folder', folderName);
            formData.append('file', file);
            return formData;
        }
    }
}