module.exports = {
    base: '/',
    dest: "docs",
    locales: {
        "/cn": {
            lang: "zh-CN",
            title: "Java Programming Style",
            description: "Java 代码整洁之道"
        },
        "/en/": {
            lang: "en-US",
            title: "Java Programming Style",
            description: "Java Clean Code"
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    themeConfig: {
        repo: 'programmingStyle/java.programming.style',
        docsRepo: "programmingStyle/java.programming.style",
        repoLabel: 'Java Programming Style',
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "阿里规范",
                        link: "/cn/alibaba/"
                    },
                    {
                        text: "谷歌规范",
                        link: "/cn/google/"
                    }
                ]
            },
            "/en/": {
                label: "English",
                selectText: "Languages",
                editLinkText: "Edit this page on GitHub",
                lastUpdated: "Last Updated",
                nav: [
                    {
                        text: "Alibaba Style",
                        link: "/en/alibaba/"
                    },
                    {
                        text: "Google Style",
                        link: "/en/google/"
                    }
                ]
            }
        }
    }
  }

  function genGuideSidebar(isZh) {
    return [
        {
            title: isZh ? "快速入门" : "Getting Start",
            collapsable: false,
            children: ["", "quick-start", "install", "config", "annotation"]
        },
        {
            title: isZh ? "核心功能" : "Core",
            collapsable: false,
            children: ["generator", "crud-interface", "wrapper", "page", "sequence", "id-generator"]
        },
        {
            title: isZh ? "插件扩展" : "Plugin",
            collapsable: false,
            children: [
                "hot-loading",
                "logic-delete",
                "enum",
                "typehandler",
                "auto-fill-metainfo",
                "sql-injector",
                "block-attack-sql-parser",
                "performance-analysis-plugin",
                "p6spy",
                "optimistic-locker-plugin",
                "dynamic-datasource",
                "dts",
                "tenant",
                "dynamic-table-name-parser",
                "mybatisx-idea-plugin"
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: [
                "faq",
                "donate"
            ]
        }
    ]
}

function genConfigSidebar(isZh) {
    return [
        {
            title: isZh ? "配置" : "Config",
            collapsable: false,
            children: ["", "generator-config"]
        }
    ]
}