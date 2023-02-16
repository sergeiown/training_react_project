import React, {useState} from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

const Altform = () => {
	const [formState, setFormState] = useState({});
	
	const handleInputChange = (event) => {
		const {name, value} = event.target;
		setFormState((prevState) => ({...prevState, [name]: value}));
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<Input
				name="firstName"
				label="First Name"
				value={formState.firstName || ''}
				onChange={handleInputChange}
			/>
			<Input
				name="lastName"
				label="Last Name"
				value={formState.lastName || ''}
				onChange={handleInputChange}
			/>
			<Select
				name="gender"
				label="Gender"
				value={formState.gender || ''}
				onChange={handleInputChange}
				options={[
					{value: 'male', label: 'Male'},
					{value: 'female', label: 'Female'},
				]}
			/>
			<TextArea
				name="bio"
				label="Bio"
				value={formState.bio || ''}
				onChange={handleInputChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};


export default Altform;