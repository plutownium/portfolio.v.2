export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.89e5d36b.js","app":"_app/immutable/entry/app.b26c16b1.js","imports":["_app/immutable/entry/start.89e5d36b.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.1329df11.js","_app/immutable/entry/app.b26c16b1.js","_app/immutable/chunks/index.6dba6488.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
