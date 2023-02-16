import React from 'react';

function Input(props) {
	const {name, label, value, onChange} = props;
	
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				type="text"
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default Input;