"use client";

import { ElementRef, useRef, useState } from "react";
import { useParams } from "next/navigation";

import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { useQueryClient } from "@tanstack/react-query";

import { AlignLeft } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";

interface DescriptionProps {
	data: CardWithList;
}

export const Description = ({ data }: DescriptionProps) => {
	const queryClient = useQueryClient();
	const params = useParams();
	const [isEditing, setIsEditing] = useState(false);
	const formRef = useRef<ElementRef<"form">>(null);
	const textareaRef = useRef<ElementRef<"textarea">>(null);

	const enableEditing = () => {
		setIsEditing(true);
		setTimeout(() => {
			textareaRef.current?.focus();
		});
	};

	const disableEditing = () => {
		setIsEditing(false);
	};

	const onKeyDawn = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			disableEditing();
		}
	};

	useEventListener("keydown", onKeyDawn);
	useOnClickOutside(formRef, disableEditing);

	const onSubmit = (formData: FormData) => {
		const description = formData.get("description") as string;
		const boardId = params.boardId as string;

		//  TODO: Execute
	};

	return (
		<div className='flex items-start gap-x-3 w-full'>
			<AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
			<div className='w-full'>
				<p className='font-semibold text-neutral-700 mb-2'>Description</p>

				{isEditing ? (
					<form
						ref={formRef}
						className='space-y-2'>
						<FormTextarea
							id='description'
							className='w-full mt-2'
							placeholder='Add amore detailed description'
							defaultValue={data.description || undefined}
						/>
						<div className='flex items-center gap-x-2'>
							<FormSubmit>Save</FormSubmit>
							<Button
								type='button'
								onClick={disableEditing}
								variant='ghost'
								size='sm'>
								Cancel
							</Button>
						</div>
					</form>
				) : (
					<div
						onClick={enableEditing}
						role='button'
						className='min-h-[78px] bg-neutral-200 text-sm font-medium py-3
                    px-3.5 rounded-md'>
						{data.description || "Add a more detailed description"}
					</div>
				)}
			</div>
		</div>
	);
};

Description.Skeleton = function DescriptionSkeleton() {
	return (
		<div className='flex items-start gap-x-3 w-full'>
			<Skeleton className='h-6 w-6 bg-neutral-200' />
			<div className='w-full'>
				<Skeleton className='bg-neutral-200 w-24 h-6 mb-2' />
				<Skeleton className='bg-neutral-200 w-full h-[78px]' />
			</div>
		</div>
	);
};
