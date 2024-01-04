"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(create, initialState);
	return (
		<form action={dispatch}>
			<div className='flex flex-col space-y-2'>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border border-black p-1'
				/>
			</div>
			<Button type='submit'>SUBMIT</Button>
		</form>
	);
};
