import React from 'react';

function TextArea(props) {
	const {name, label, value, onChange} = props;
	
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default TextArea;
