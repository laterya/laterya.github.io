import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "欢迎",

	// 公告内容
	content: "这里记录工程实践、产品观察，以及值得长期推进的项目。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "关于这个站点",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
