
import { __ } from '@wordpress/i18n';

import './editor.scss';


export default function Edit() {
	return (
		<p >
			{ __(
				'Ordered List Block – hello from the editor!',
				'ordered-list-block'
			) }
		</p>
	);
}
