import mdItContainer from 'markdown-it-container';
import type MarkdownIt from 'markdown-it'

/**
 * 自定义Markdown It
 * @param md 
 */
export function customMarkdownIt(md: MarkdownIt) {
    //定义content
    md.use(mdItContainer, 'content', {
        validate: (params: string) => {
            const trimmed = params.trim();
            return trimmed.startsWith('content') && trimmed.length === 7;
        },
        render: (tokens, idx) => {
            return tokens[idx].nesting === 1
                ? `<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">\n`
                : '</section>\n'
        }
    });

    //定义标题
    md.use(mdItContainer, 'title', {
        validate: (params: string) => {
            const trimmed = params.trim();
            return trimmed.startsWith('title') && trimmed.length === 5;
        },
        render: (tokens, idx) => {
            return tokens[idx].nesting === 1
                ? `<div class="main-title pt-16 sm:pt-16">\n`
                : '</div>\n'
        }
    });

    //定义副标题
    md.use(mdItContainer, 'sub-title', {
        validate: (params: string) => {
            const trimmed = params.trim();
            return trimmed.startsWith('sub-title') && trimmed.length === 9;
        },
        render: (tokens, idx) => {
            return tokens[idx].nesting === 1
                ? `<div class="sub-title mt-2 mb-4">\n`
                : '</div>\n'
        }
    });

    //定义Table
    md.use(mdItContainer, 'table', {
        validate: (params: string) => {
            const trimmed = params.trim();
            return trimmed.startsWith('table') && trimmed.length === 5;
        },
        render: (tokens, idx) => {
            return tokens[idx].nesting === 1
                ? `<div class="mt-2 table-pre th-bottom-line">\n`
                : '</div>\n'
        }
    });

    //定义block块级
    md.use(mdItContainer, 'block', {
        validate: (params: string) => {
            const trimmed = params.trim();
            // 允许 block 或 block-数字 格式
            return /^block(-\d+)?$/.test(trimmed);
        },
        render: (tokens, idx) => {
            const token = tokens[idx];
            const info = token.info.trim();

            // 提取数字部分，默认为50
            const marginNumber = info.includes('-')
                ? info.split('-')[1] || '50'  // 处理 block- 后无数字的情况
                : '50';  // 纯 block 的情况

            return token.nesting === 1
                ? `<div class="mb-${marginNumber}">\n`  // 动态插入数字
                : '</div>\n'
        }
    });

    // 配置 style 容器
    md.use(mdItContainer, 'style', {
        validate: (params: string) => {
            const trimmed = params.trim()
            return trimmed.startsWith('style') && trimmed.length > 5
        },
        render: (tokens, idx) => {
            const rawParams = tokens[idx].info.trim().slice(5).trim()
            const classes = rawParams.split(/\s+/).filter(c => c).join(' ')
            return tokens[idx].nesting === 1
                ? `<div class="${classes}">\n`
                : '</div>\n'
        }
    });

    // 配置 accordion 容器（带样式隔离）
    md.use(mdItContainer, 'accordion', {
        validate: (params: string) => {
            const trimmed = params.trim()
            return trimmed.startsWith('accordion') && trimmed.length > 9
        },
        render: (tokens, idx) => {
            const title = tokens[idx].info.trim().slice(9).trim() || '点击展开'
            if (tokens[idx].nesting === 1) {
                return `
					  <div class="vp-accordion-wrapper">
						<details class="vp-accordion">
						  <summary>${title}</summary>
						  <div class="vp-accordion-content">
					`
            }
            return '</div></details></div>\n'
        }
    });
}