const normalizeBasePath = (basePath: string) => {
	if (basePath === "/") {
		return "/";
	}

	return basePath.endsWith("/") ? basePath : `${basePath}/`;
};

export const getManufacturingBasePath = () => {
	if (typeof window !== "undefined" && /^\/manufacturing(?:\/|$)/.test(window.location.pathname)) {
		return "/manufacturing/";
	}

	return normalizeBasePath(import.meta.env.BASE_URL || "/");
};

export const manufacturingPath = (suffix = "") => {
	const basePath = getManufacturingBasePath();

	if (!suffix) {
		return basePath;
	}

	const normalizedSuffix = suffix.startsWith("/") ? suffix.slice(1) : suffix;

	return `${basePath}${normalizedSuffix}`;
};