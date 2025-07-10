# 同步配置

数据同步配置指南，帮助您设置跨设备的笔记同步功能。

![image.png](https://s2.loli.net/2025/07/10/eSPLbUfYRuphnoO.png)

## 主要同步方式

主要同步方式目前支持 Github、Gitee，原因是历史回滚功能需要 Git（本地无需安装 Git） 的支持。

### 配置

- Github Access Token，需要去 [Github](https://github.com/settings/tokens/new) 或 [Gitee](https://gitee.com/profile/personal_access_tokens) 获取 令牌，注意需要访问仓库的权限。
- 自动同步，开启后，在写作时，停止输入后的 * 秒后进行自动快速备份，提交内容为固定模板，可折叠。

::: tip
- 注意要选择 Github 或 Gitee 作为主要备份方式才可生效，按钮位于页面最下方。
- Markdown 都会存储于私有仓库。
:::