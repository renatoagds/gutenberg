/**
 * Returns if the params match the list page route.
 *
 * @param {Object} params      The url params.
 * @param {string} params.path The current path.
 *
 * @return {boolean} Is list page or not.
 */
export default function getIsListPage( { path } ) {
	return path === '/templates/all' || path === '/template-parts/all';
}
