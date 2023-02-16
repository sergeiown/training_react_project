import React from 'react';

function Select(props) {
	const {name, label, value, onChange, options} = props;
	
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
