export const manufacturingPath = (suffix = "") => {
	const basePath = import.meta.env.BASE_URL;

	if (!suffix) {
		return basePath;
	}

	const normalizedSuffix = suffix.startsWith("/") ? suffix.slice(1) : suffix;

	return `${basePath}${normalizedSuffix}`;
};