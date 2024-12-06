/*
  <Input kind="text" placeholder="Placeholder" label="Label" name="name" />
  <Input kind="select" label="Label" name="name" options={[
			{ label: "Option 1", value: "option1" },
			{ label: "Option 2", value: "option2" },
		]}
	/>
  <Input kind="radio" label="Label" name="name" options={[
			{ label: "Option 1", value: "option1" },
			{ label: "Option 2", value: "option2" },
		]}
	/>
*/

import React from "react";

type InputProps = {
	kind: "text" | "email" | "password";
} & React.InputHTMLAttributes<HTMLInputElement>;

type SelectProps = {
	kind: "select";
	options: { label: string; value: string }[];
	placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

type RadioProps = {
	kind: "radio";
	options: { label: string; value: string }[];
	placeholder?: never;
	name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InternalInput: React.FC<InputProps | SelectProps | RadioProps> = (
	props,
) => {
	switch (props.kind) {
		case "select":
			return (
				<select {...props}>
					{props.placeholder && (
						<option value="" disabled selected>
							{props.placeholder}
						</option>
					)}
					{props.options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			);
		case "radio":
			return (
				<>
					{props.options.map((option) => (
						<label key={option.value}>
							<input type="radio" {...props} value={option.value} />
							{option.label}
						</label>
					))}
				</>
			);
		default:
			return <input type={props.kind} {...props} />;
	}
};

type GeneralInputProps = (InputProps | SelectProps | RadioProps) & {
	label: React.ReactNode;
};

export const Input: React.FC<GeneralInputProps> = ({ label, id, ...props }) => {
	const defaultId = React.useId() || id;
	return (
		<>
			{props.kind === "radio" ? (
				<span>{label}</span>
			) : (
				<label htmlFor={defaultId}>{label}</label>
			)}
			<InternalInput {...props} id={defaultId} />
		</>
	);
};
