import { useState, useCallback } from "react";

import { ActionState } from "@/lib/create-safe-action";

type Action<TInput, TOutput> = (
	data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
	onSuccess?: (data: TOutput) => void;
	onError?: (error: string) => void;
	onComplete?: () => void;
}

export const useAction = <TInput, TOutput> (
    action: Action<TInput, TOutput>,
    options: UseActionOptions<TOutput> = {}
) => {
    const [fieldErro]
}