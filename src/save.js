import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { bgColor, borderRadius } = attributes;
	return (
		<div
			className="custom-order-list"
			style={{ backgroundColor: bgColor, borderRadius: borderRadius + "px" }}
		>
			<InnerBlocks.Content />
		</div>
	);
}
