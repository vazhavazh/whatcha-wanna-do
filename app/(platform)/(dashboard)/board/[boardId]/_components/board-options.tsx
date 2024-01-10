"use client";
06:36:06

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface BoardOptionsProps {
	id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className='h-auto w-auto p-2'
					variant='transparent'>
					<MoreHorizontal className='h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className='px-0 pt-3 pb-3'
				side='bottom'
				align='start'>
				<div
					className='text-sm font-medium text-center text-neutral-600
                pb-4'>
					Board Actions
				</div>
			</PopoverContent>
		</Popover>
	);
};
