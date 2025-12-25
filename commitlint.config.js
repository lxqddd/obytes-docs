module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 允许中文 commit message，禁用句子大小写检查
    'subject-case': [0], // 0 = disabled
    // 允许中文字符和标点符号
    'subject-full-stop': [0, 'never'], // 不强制要求结尾没有句号，因为中文可能需要
    // 允许更长的 subject，因为中文可能需要更多字符
    'subject-max-length': [2, 'always', 100], // 允许更长的主题
    'body-max-line-length': [2, 'always', 200], // 允许更长的正文行
    'footer-max-line-length': [2, 'always', 200], // 允许更长的页脚行
  },
};
