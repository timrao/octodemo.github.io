import { defineConfig } from "vitepress";
import { customMarkdownIt } from "./utils/plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/",
	markdown: {
		config: (md) => {
			//自定义markdown it插件
			customMarkdownIt(md);
		}
	},
	themeConfig: {
		logo: "/assets/logo.svg",
		footer: {
			copyright: "© 2024 Syncto, Inc. All rights reserved.",
		},
	},
	head: [
		[
			"link",
			{
				rel: "android-chrome",
				sizes: "192x192",
				href: "/assets/favicons/android-chrome-192x192.png",
			},
		],
		[
			"link",
			{
				rel: "android-chrome",
				sizes: "512x512",
				href: "/assets/favicons/android-chrome-512x512.png",
			},
		],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/assets/favicons/apple-touch-icon.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/assets/favicons/favicon-32x32.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/assets/favicons/favicon-16x16.png",
			},
		],
		["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
		[
			"link",
			{
				rel: "mask-icon",
				href: "/assets/favicons/safari-pinned-tab.svg",
				color: "#3a0839",
			},
		],
		["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
	],
	locales: {
		root: {
			label: "English",
			lang: "en",
			title: "Octoclip",
			description: "Copy Here, Paste Anywhere - One clipboard for all your devices",
			themeConfig: {
				nav: [
					{
						text: "Product",
						items: [
							{
								text: "",
								items: [
									{ text: "Home", link: "/" },
									{ text: "Guide", link: "/guide/" },
									{ text: "Roadmap", link: "/roadmap" },
									{ text: "Knowledge Base", link: "/knowledge-base" },
									{ text: "FAQ", link: "/faq" },
									{ text: "Changelog", link: "/changelog" },
								],
							},
							{
								text: "Others",
								items: [{ text: "Octofile 3", link: "https://octofile.app" }],
							},
						],
					},
					{
						text: "Pricing",
						link: "/pricing"
					},
					{
						text: "Download",
						items: [
							{
								text: "macOS",
								items: [
									{
										text: "Mac App Store",
										link: "https://apps.apple.com/app/octoclip/id6479194354",
									},
									{
										text: "TestFlight",
										link: "https://testflight.apple.com/join/GXT7sgW3",
									},
								],
							},
							{
								text: "iOS",
								items: [
									{
										text: "App Store",
										link: "https://apps.apple.com/app/octoclip/id6479194354",
									},
									{
										text: "TestFlight",
										link: "https://testflight.apple.com/join/GXT7sgW3",
									},
								],
							},
							{
								text: "Android",
								items: [
									{
										text: "Google Play",
										link: "https://play.google.com/store/apps/details?id=app.octoclip.v1",
									},
									{
										text: "APK",
										link: "https://github.com/Hypobenthos/Octoclip/releases/latest/download/Octoclip.apk",
									},
								],
							},
							{
								text: "Windows",
								items: [
									{
										text: "Microsoft Store",
										link: "https://apps.microsoft.com/detail/9ppgmxv047jp",
									},
								],
							},
						],
					},
					{
						text: "Support",
						items: [
							{ text: "Contact Us", link: "/contact-us" },
							{ text: "About Us", link: "/about-us" },
						],
					},
					{
						text: "Terms",
						items: [
							{ text: "Privacy Policy", link: "/privacy-policy" },
							{ text: "Terms of Service", link: "/terms-of-service" },
							{
								text: "End User License Agreement",
								link: "/end-user-license-agreement",
							},
						],
					},
					{
						text: "Discussion",
						link: "/discussion-group",
					},
					{
						text: "Feedback",
						link: "/feedback",
					},
					{
						text: "Features requests",
						link: "https://octoclip.canny.io/feature-requests",
					},
				],
			},
		},
		zh: {
			label: "中文",
			lang: "zh",
			title: "章鱼速贴",
			description: "随心复制，随处粘贴 - 一个剪贴板，连接所有设备",
			themeConfig: {
				nav: [
					{
						text: "产品",
						items: [
							{
								text: "",
								items: [
									{ text: "主页", link: "/zh/" },
									{ text: "指南", link: "/zh/guide/" },
									{ text: "路线图", link: "/zh/roadmap" },
									{ text: "知识库", link: "/zh/knowledge-base" },
									{ text: "常见问题", link: "/zh/faq" },
									{ text: "更改日志", link: "/zh/changelog" },
								],
							},
							{
								text: "其他",
								items: [{ text: "章鱼快传 3", link: "https://octofile.app" }],
							},
						],
					},
					{
						text: "价格",
						link: "/zh/pricing"
					},
					{
						text: "下载",
						items: [
							{
								text: "macOS",
								items: [
									{
										text: "Mac App Store",
										link: "https://apps.apple.com/app/octoclip/id6479194354",
									},
									{
										text: "TestFlight",
										link: "https://testflight.apple.com/join/GXT7sgW3",
									},
								],
							},
							{
								text: "iOS",
								items: [
									{
										text: "App Store",
										link: "https://apps.apple.com/app/octoclip/id6479194354",
									},
									{
										text: "TestFlight",
										link: "https://testflight.apple.com/join/GXT7sgW3",
									},
								],
							},
							{
								text: "Android",
								items: [
									{
										text: "Google Play",
										link: "https://play.google.com/store/apps/details?id=app.octoclip.v1",
									},
									{
										text: "APK",
										link: "https://github.com/Hypobenthos/Octoclip/releases/latest/download/Octoclip.apk",
									},
								],
							},
							{
								text: "Windows",
								items: [
									{
										text: "Microsoft Store",
										link: "https://apps.microsoft.com/detail/9ppgmxv047jp",
									},
								],
							},
						],
					},
					{
						text: "支持",
						items: [
							{ text: "联系我们", link: "/zh/contact-us" },
							{ text: "关于我们", link: "/zh/about-us" },
						],
					},
					{
						text: "条款",
						items: [
							{ text: "隐私政策", link: "/zh/privacy-policy" },
							{ text: "服务条款", link: "/zh/terms-of-service" },
							{
								text: "最终用户许可协议",
								link: "/zh/end-user-license-agreement",
							},
						],
					},
					{
						text: "讨论组",
						link: "/zh/discussion-group",
					},
					{
						text: "问题反馈",
						link: "/zh/feedback",
					},
					{
						text: "功能建议",
						link: "https://octoclip.canny.io/feature-requests",
					},
				],
			},
		},
	},
});
