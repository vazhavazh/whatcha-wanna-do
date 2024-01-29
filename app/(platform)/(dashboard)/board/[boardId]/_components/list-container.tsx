"use client";

import { useEffect, useState } from "react";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

interface ListContainerProps {
	data: ListWithCards[];
	boardId: string;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
	const [orderedData, setOrderedData] = useState(data);

	useEffect(() => {
		setOrderedData(data);
	}, [data]);

	const onDragEnd = (result: any) => {
		const { destination, source, type } = result;

		if (!destination) {
			return;
		}

		// ** if droped in the same position

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		// ** User move a list

		if (type === "list") {
			const items = reorder(orderedData, source.index, destination.index);
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable
				droppableId='lists'
				type='list'
				direction='horizontal'>
				{(provided) => (
					<ol
						{...provided.droppableProps}
						ref={provided.innerRef}
						className='flex gap-x-3 h-full'>
						{orderedData.map((list, idx) => {
							return (
								<ListItem
									key={list.id}
									index={idx}
									data={list}
								/>
							);
						})}
						{provided.placeholder}
						<ListForm />
						<div className='flex-shrink-0 w-1' />
					</ol>
				)}
			</Droppable>
		</DragDropContext>
	);
};
