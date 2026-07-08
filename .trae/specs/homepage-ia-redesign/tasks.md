# 任务列表

- [ ] Task 1: 全站导航栏新增"专家团队"链接
  - 在所有 8 个页面（index、about、services、cases-detail、experts、diag、cases、404）的 `.header-nav` 中添加 `<a href="experts.html">专家团队</a>`
  - 放置在"案例"和"诊断"之间
  - 在 experts.html 中将该链接标记为 active

- [ ] Task 2: 全站 Footer 新增"专家团队"链接
  - 在所有页面的 footer 导航列表中添加 `<li><a href="experts.html">专家团队</a></li>`
  - 放置在"成功案例"和"诊断"之间

- [ ] Task 3: 首页内容重构
  - 删除 About 摘要区块（services 之前的 about-section）
  - 删除独立的诊断 CTA 区块（cases 之前的 diagnosis-section）
  - 将 Team 区块从 3 位专家精简为 2 位（李景行 + 王少华）
  - 合并底部 CTA（保留一个统一的联系/行动区域）

- [ ] Task 4: 处理 cases.html 冗余页面
  - 删除 cases.html 或将其转换为重定向页面

- [ ] Task 5: 验证所有修改
  - 导航栏：所有页面 6 个链接顺序一致，专家团队在高亮正确
  - 首页：区块从 9 个减至约 6 个，无重复内容
  - Footer：统一包含专家团队链接
  - cases.html 已妥善处理

# 任务依赖关系
- [Task 1] 无依赖
- [Task 2] 无依赖
- [Task 3] 无依赖
- [Task 4] 无依赖
- [Task 5] 依赖 [Task 1]、[Task 2]、[Task 3]、[Task 4]
