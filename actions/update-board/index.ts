"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth();

	if (!userId || !orgId) {
		return {
			error: "Unauthorized",
		};
	}

	const { title, id } = data;

	let board;

	try {
		board = await db.board.update({
			where: {
				id,
				orgId,
			},
			data: {
				title,
			},
		});
	} catch (error) {}
};
