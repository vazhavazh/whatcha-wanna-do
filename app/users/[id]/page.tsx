import React from "react";

const IDPage = ({ params }: { params: { id: string } }) => {
	return <div>ID: {params.id}</div>;
};

export default IDPage;
