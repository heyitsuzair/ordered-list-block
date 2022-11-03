import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	title: metadata.title,
	description: metadata.description,
	icon: metadata.icon,
	attributes: {
		bgColor: {
			type: "string",
			default: "#ecf2f4",
		},
		borderRadius: {
			type: "number",
			default: 8,
		},
	},
	edit: Edit,
	save,
});
