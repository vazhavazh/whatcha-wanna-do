"use server";
import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
	message?: string | null;
	errors?: {
		title?: string[];
	};
};

const CreateBoard = z.object({
	title: z.string().min(3, {
		message: "Minimum length of 3 letters is required",
	}),
});

export async function create(state: State, formData: FormData): Promise<State> {
	const validatedFields = CreateBoard.safeParse({
		title: formData.get("title"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields",
		};
	}

	const { title } = validatedFields.data;

	try {
		await db.board.create({
			data: {
				title,
			},
		});
	} catch (error) {
		return {
			message: "Database error",
		};
	}

	revalidatePath("/organization/org_2Zaf92DBa8Cr8wyc4iBod1rUJ7e");
	redirect("/organization/org_2Zaf92DBa8Cr8wyc4iBod1rUJ7e");
}
