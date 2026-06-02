const MANUFACTURING_ORIGIN = "https://manufacturing-pied.vercel.app";
const WHOLESALERS_ORIGIN = "https://wholesalers-distributors.vercel.app";

function withHostHeader(request, targetUrl) {
	const headers = new Headers(request.headers);
	headers.set("Host", new URL(targetUrl).hostname);

	return new Request(targetUrl, {
		method: request.method,
		headers,
		body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
		redirect: "follow",
	});
}

function proxy(origin, request, pathname, search) {
	const targetUrl = `${origin}${pathname}${search}`;
	return fetch(withHostHeader(request, targetUrl));
}

function getRefererPathname(request) {
	const referer = request.headers.get("Referer");

	if (!referer) {
		return "";
	}

	try {
		return new URL(referer).pathname;
	} catch {
		return "";
	}
}

function routeAssets(request, pathname, search) {
	const refererPathname = getRefererPathname(request);
	const origin = refererPathname.startsWith("/manufacturing") ? MANUFACTURING_ORIGIN : WHOLESALERS_ORIGIN;

	return proxy(origin, request, pathname, search);
}

export default {
	async fetch(request) {
		const url = new URL(request.url);
		const { pathname, search } = url;

		if (pathname === "/manufacturing") {
			return Response.redirect(`${url.origin}/manufacturing/`, 308);
		}

		if (pathname === "/manufacturing/" || pathname.startsWith("/manufacturing/")) {
			const cleanPath = pathname.replace(/^\/manufacturing/, "") || "/";
			return proxy(MANUFACTURING_ORIGIN, request, cleanPath, search);
		}

		if (pathname.startsWith("/assets/")) {
			return routeAssets(request, pathname, search);
		}

		if (pathname.startsWith("/wholesalers-distributors")) {
			let cleanPath = pathname.replace(/^\/wholesalers-distributors/, "");
			if (cleanPath === "") {
				cleanPath = "/";
			}

			return proxy(WHOLESALERS_ORIGIN, request, cleanPath, search);
		}

		return proxy(WHOLESALERS_ORIGIN, request, pathname, search);
	},
};