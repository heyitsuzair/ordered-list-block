import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

import "./editor.scss";

const TEMPLATE = [["core/list"]];

export default function Edit({ attributes, setAttributes }) {
	const { bgColor, borderRadius } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Styles">
					<div>
						<strong>Select Background Color:</strong>
						<ColorPalette
							value={bgColor}
							onChange={(bgColor) => setAttributes({ bgColor })}
						/>
					</div>

					<RangeControl
						value={borderRadius}
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						label="Border Radius"
						min={0}
						max={50}
						step={0.5}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				className="custom-order-list"
				style={{ backgroundColor: bgColor, borderRadius: borderRadius + "px" }}
			>
				<InnerBlocks template={TEMPLATE} />
			</div>
		</>
	);
}
