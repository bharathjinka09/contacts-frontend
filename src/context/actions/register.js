import axiosInstance from '../../helpers/axios'

export const register = () => {
	axiosInstance
		.post('/auth/register')
		.then(response => console.log(response))
		.catch(error => console.log(error))
}