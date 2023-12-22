"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
	const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState)
	return (
		<form action={dispatch}>
			<input
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
				className='border border-black p-1'
			/>
			<Button type='submit'>SUBMIT</Button>
		</form>
	);
};
