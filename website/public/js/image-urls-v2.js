/**
 * image-urls-v2.js — 网站配图资源（本地路径）
 * 
 * 配图规范（详见 spec: hj-website-image-system）：
 * - Hero: 1400×933 办公/会议/分析场景
 * - Case: 800×533 行业场景（建筑/制造/纾困）
 * - Service: 800×534 咨询服务场景
 * - About: 1200×800 团队形象
 * 
 * 替换图片时：
 * 1. 保持文件名不变，替换 website/public/images/ 中的文件
 * 2. 递增下方 ?v=N 版本号（如 v=3 → v=4）
 * 3. 新图片尺寸不小于建议尺寸的 80%
 * 4. 主题方向必须符合注释说明
 */
window.__IMAGE_URLS = {
  /* 首页 Hero 轮播：现代办公/产业园区/战略会议主题，1400×933 */
  heroImages: [
    "images/hero-1.jpg?v=4",   // 产业园区/写字楼外景
    "images/hero-2.jpg?v=4",   // 企业会议室/战略讨论
    "images/hero-3.jpg?v=4"    // 数据分析/财务诊断
  ],

  /* 案例配图：行业场景，800×533 */
  case1: "images/case-1.jpg?v=4",   // 建筑/工程行业
  case2: "images/case-2.jpg?v=4",   // 贸易/物流/制造行业
  case3: "images/case-3.jpg?v=4",   // 餐饮/服务/纾困场景

  /* 服务配图：咨询服务场景，800×534 */
  service1: "images/service-1.jpg?v=4",   // 财务数据分析/诊断
  service2: "images/service-2.jpg?v=4",   // 一对一咨询/辅导
  service3: "images/service-3.jpg?v=4",   // 重组方案/多边协商

  /* 关于页 Banner：专业团队/公司形象，1200×800 */
  about: "images/about-banner.jpg?v=4",

  /* 专栏配图：复用现有服务/案例图片，800×534/533 */
  column1: "images/service-1.jpg?v=4",   // 专栏-债务重组（财务数据场景）
  column2: "images/case-2.jpg?v=4",     // 专栏-资产盘活（制造/物流场景）
  column3: "images/service-3.jpg?v=4",  // 专栏-重组方案/法律风控（谈判场景）
  column4: "images/case-3.jpg?v=4",     // 专栏-经营诊断（纾困场景）

  /* 新闻配图：复用现有服务/案例图片，800×534/533 */
  news1: "images/service-2.jpg?v=4",    // 公司动态（咨询/会议场景）
  news2: "images/case-1.jpg?v=4",      // 行业资讯/媒体报道（建筑/行业场景）
  column5: "images/case-3.jpg?v=4",    // 同步-file-1784133364981,
  column6: "images/case-3.jpg?v=4",    // 同步-article-20260712-11d8pd,
  column7: "images/case-3.jpg?v=4",    // 同步-article-20260713-1ki1pb,
  column8: "images/case-3.jpg?v=4",    // 同步-file-1784133364981-2,
  column9: "images/case-3.jpg?v=4",    // 同步-file-1784133364981-3,
  column10: "images/case-3.jpg?v=4",    // 同步-article-20260715-10xdyk
  column11: "images/column-11.jpg?v=4",
  column12: "images/column-12.jpg?v=4",
  column13: "images/column-13.jpg?v=4",
  column14: "images/column-14.jpg?v=4",
  column15: "images/column-15.jpg?v=4",
  column16: "images/column-16.jpg?v=4",
  column17: "images/column-17.jpg?v=4",
  column18: "images/column-18.jpg?v=4",
  column21: "images/column-3.jpg?v=4",
  column23: "images/column-5.jpg?v=4",
  column27: "images/column-9.jpg?v=4",
  columnCover20wan: "images/column-cover-20wan.jpg?v=2",
  columnCoverLostBoss: "images/column-cover-lost-boss.jpg?v=2",
  columnCoverFourThresholds: "images/column-cover-four-thresholds.jpg?v=2",
  columnCoverLprInterest: "images/column-cover-lpr-interest.jpg?v=2",
  columnCoverLawsuitAccountingAssets: "images/column-cover-lawsuit-accounting-assets.jpg?v=2",
  columnCoverLawyerAccountantNpl: "images/column-cover-lawyer-accountant-npl.jpg?v=2"
};
