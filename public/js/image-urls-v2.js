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
 * 1. 保持文件名不变，替换 public/images/ 中的文件
 * 2. 递增下方 ?v=N 版本号（如 v=3 → v=4）
 * 3. 新图片尺寸不小于建议尺寸的 80%
 * 4. 主题方向必须符合注释说明
 */
window.__IMAGE_URLS = {
  /* 首页 Hero 轮播：现代办公/产业园区/战略会议主题，1400×933 */
  heroImages: [
    "images/hero-1.jpg?v=3",   // 产业园区/写字楼外景
    "images/hero-2.jpg?v=3",   // 企业会议室/战略讨论
    "images/hero-3.jpg?v=3"    // 数据分析/财务诊断
  ],

  /* 案例配图：行业场景，800×533 */
  case1: "images/case-1.jpg?v=3",   // 建筑/工程行业
  case2: "images/case-2.jpg?v=3",   // 贸易/物流/制造行业
  case3: "images/case-3.jpg?v=3",   // 餐饮/服务/纾困场景

  /* 服务配图：咨询服务场景，800×534 */
  service1: "images/service-1.jpg?v=3",   // 财务数据分析/诊断
  service2: "images/service-2.jpg?v=3",   // 一对一咨询/辅导
  service3: "images/service-3.jpg?v=3",   // 重组方案/多边协商

  /* 关于页 Banner：专业团队/公司形象，1200×800 */
  about: "images/about-banner.jpg?v=3"
};
