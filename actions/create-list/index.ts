"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

import { CreateList } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth();

	if (!userId || !orgId) {
		return {
			error: "Unauthorized",
		};
	}

	const { title,boardId } = data;

	let list;

	try {
		list = await db.list.create({
		
			data: {
				title,
			},
		});
	} catch (error) {
		return {
			error: "Failed to update",
		};
	}
	revalidatePath(`/board/${id}`);
	return { data: board };
};

export const createList = createSafeAction(CreateList, handler);
