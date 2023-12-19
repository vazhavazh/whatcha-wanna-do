"use client";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type Organization = {
	id: string;
	slug: string;
	imageUrl: string;
	name: string;
};

interface NavItemProps {
	isExpanded: boolean;
	isActive: boolean;
	organization: any;
	onExpand: (id: string) => void;
}

export const NavItem = ({
	isExpanded,
	isActive,
	organization,
	onExpand,
}: NavItemProps) => {
	return (
		<AccordionItem
			value={organization.id}
			className='border-none'>
			<AccordionTrigger
				onClick={() => onExpand(organization.id)}
				className={cn}></AccordionTrigger>
		</AccordionItem>
	);
};
