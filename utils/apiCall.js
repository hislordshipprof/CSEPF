
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const  convertDataToFormData = (data) => {
    let formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}


export const APICall = async (url, data={}) => {
    try {
        
        const response = await fetch(BASE_API_URL + url, {
            method: 'POST',
            body: convertDataToFormData(data),
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return error;
    }
}