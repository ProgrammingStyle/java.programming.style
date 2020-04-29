module.exports = {
    base: '/',
    dest: "docs",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java 编程规范",
            description: "Java 代码整洁之道",
        },
        "/en/": {
            lang: "en-US",
            title: "Java Clean Code",
            description: "Clean Code"
        }
    },
    head: [
        ["link", {rel: "icon", href: `/favicon.ico`}]
    ],
    themeConfig: {
        repo: 'programmingStyle/java.programming.style',
        docsRepo: "programmingStyle/java.programming.style",
        repoLabel: 'Java Programming Style',
        editLinks: true,
        smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "选择语言",
                ariaLabel: '选择语言',
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: require('./nav/zh'),
                sidebar:{
                    '/alibaba/': getAlibabaSidebar('Java开发手册(泰山版)'),
                    '/google/': getGoogleSidebar('谷歌规约')
                }
            },
            "/en/": {
                label: "English",
                selectText: "Languages",
                ariaLabel: 'Select language',
                editLinkText: "Edit this page on GitHub",
                lastUpdated: "Last Updated",
                nav: require('./nav/en'),
                sidebar:{
                    '/en/alibaba/': getAlibabaSidebar('Alibaba Java Development Manual (Taishan Edition)'),
                    '/en/google/': getGoogleSidebar('Google Guide')
                }
            }
        }
    }
}

  function getAlibabaSidebar(titleA){
      return [
          {
              title: titleA,
              collapsable: false,
              children: [
                  '',
                  'java-specification',
                  'exception-log-specification',
                  'unit-test-specification',
                  'security-specification',
                  'mysql-database-specification',
                  'project-struct-specification',
                  'design-specification',
                  'appendix'
              ]
          }
      ];
  }

  function getGoogleSidebar(titleA){
      return [
          {
              title: titleA,
              collapsable: false,
              children: [
                  '',
                  'source-file-basics',
                  'source-file-structure',
                  'formatting',
                  'naming',
                  'programming-practices',
                  'javadoc'
              ]
          }
      ];
  }


  
