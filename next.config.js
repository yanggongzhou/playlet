/** @type {import('next').NextConfig} */
const path = require('path');
const platform = {
  xsdq: {
    id: '1',
    webDomainObj: {
      test: 'https://xs.hw.dzods.cn',
      staging: 'https://yfbwww.xsdqnovel.com',
      prod: 'https://www.xsdqnovel.com'
    },
    buildId: "xsdq-030102"
  },
  xskd: {
    id: '2',
    webDomainObj: {
      test: 'https://xs.hw.dzods.cn',
      staging: 'https://yfbwww.kdnovel.com',
      prod: 'https://www.kdnovel.com'
    },
    buildId: "xskd-030102"
  },
  xsydb: {
    id: '3',
    webDomainObj: {
      test: 'https://xs.hw.dzods.cn',
      staging: 'https://yfbwww.kdnovel.com',
      prod: 'https://www.ydbnovel.com'
    },
    buildId: "xsydb-030102"
  },
}


const  baseUrlObj = {
    test: 'https://241.qcread.cn',
    staging: 'https://yfb.klynf.com',
    prod: 'https://api.klynf.com'
  }

/** ⬇⬇⬇⬇⬇⬇✨✨✨✨✨✨ 环境,手动更换 ✨✨✨✨✨✨⬇⬇⬇⬇⬇⬇*/
const environment = 'staging'; // 部署环境 "test" | "staging" | "prod"
const Platform = 'xsydb'; // 产品线 "xsdq" | "xskd" | "xsydb"
/** ⬆⬆⬆⬆⬆⬆✨✨✨✨✨✨ ℹℹℹℹℹℹℹℹℹℹ ✨✨✨✨✨✨⬆⬆⬆⬆⬆⬆ */

const BaseUrl = baseUrlObj[environment]; // 网站服务api
const WebDomain = platform[Platform].webDomainObj[environment]; // 网站域名
const ServerLine = platform[Platform].id; // 服务端产品线参数
const buildId = platform[Platform].buildId; // 构建ID

console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')
console.log('\x1B[34m%s\x1B[39m', '部署环境:', environment)
console.log('\x1B[34m%s\x1B[39m', '产品线:', Platform, ServerLine)
console.log('\x1B[34m%s\x1B[39m', 'API:', BaseUrl)
console.log('\x1B[34m%s\x1B[39m', '网站域名:', WebDomain)
console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')


const nextConfig = {
  // /** 以下输出静态页面 */
  // // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  // output: 'export', // Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application.
  // // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://landpage.hw.dzods.cn' : undefined,
  // basePath: "/out",
  // productionBrowserSourceMaps: false,
  // /** 以上输出静态页面 */
  generateBuildId: async () => {
    return 'playlet-1';
  },

  transpilePackages: ['antd-mobile'],
  reactStrictMode: true,
  images: { // 远程图片资源域名
    unoptimized: true, // 优先渲染图片
    domains: [
      'hotres.kzread.cn',
      'asg-hw-bookimg.s3.ap-southeast-1.amazonaws.com',
      'hws3.klynf.com',
      'bookimg.klynf.com',
    ],
  },
  env: {
    BaseUrl,
    WebDomain,
    ServerLine,
    Platform,
    environment
  },

  sassOptions: {
    includePaths: [path.join(__dirname, './src/app')],
    prependData: `@import "common.module.scss";`
  },
  async rewrites() {
    return [
      // { source: '/robot/send/:path*', destination: `https://oapi.dingtalk.com/robot/send:path*` },
      // { source: '/text-to-speech/:path*', destination: `https://api.elevenlabs.io/v1/text-to-speech:path*` },
    ]
  },
}

module.exports = nextConfig
