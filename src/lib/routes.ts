export const manufacturingPath = (suffix = "") => {
	if (!suffix) {
		return "/";
	}

	const normalizedSuffix = suffix.startsWith("/") ? suffix.slice(1) : suffix;

	return `/${normalizedSuffix}`;
};