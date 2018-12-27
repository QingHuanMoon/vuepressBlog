const fs = require('fs')
const path = require('path')
module.exports = {
  dest: '月落清欢的个人博客',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '月落清欢的个人博客',
      description: '技术总结与分享'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', {src: '/js/help.js'}]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'docschina/vuepress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'JavaScript',
            link: '/js/',
          },
          {
            text: 'PHP',
            link: '/php/'
          },
          {
            text: 'About',
            link: '/about/',
          },
          {
            text: 'Languages',
            items: [
              { text: '中文', link: '/languages/chinese/' },
              { text: '日文', link: '/languages/japanese/' },
            ]
          }
        ],
        sidebar: {
          '/js/': genSidebarConfig('js/', 'JavaScript')
        }
      }
    }
  }
}

function genSidebarConfig (dirPath, title) {
  let mdList = []
  var filePath = path.resolve('./' + dirPath)
  fs.readdir(filePath, (error, files) => {
    if (error) {
      console.warn(error)
    } else {
      files.forEach(filename => {
        let fileNameRes = filename.substring(0, filename.length - 3)
        console.log(fileNameRes)
        if (fileNameRes === 'README') return
        mdList.push(fileNameRes)
      })
      mdList.unshift('')
    }
  })
  return [
    {
      title,
      collapsable: false,
      children: mdList
    }
  ]
}

