#!/bin/bash

# 运行 expo-doctor 并捕获输出和退出码
output=$(npx expo-doctor@latest 2>&1)
exit_code=$?

# 输出文件位置
output_file=".expo/expo-doctor.md"
{
  # 根据退出码添加摘要
  if [ $exit_code -eq 0 ]; then
    echo "✅ **Good news!** We ran Expo Doctor for this PR and everything looks good, Great job!" > "$output_file"
  else
    echo "❌ **Action Required:**  We ran Expo Doctor for this PR and found some issues that need to be addressed. Please review the complete report below 👇" > "$output_file"
    echo >> "$output_file"  # Add blank line
    echo "\`\`\`shell" >> "$output_file"
    echo "$output" >> "$output_file"
    echo "\`\`\`" >> "$output_file"
  fi
}

# 在终端显示原始输出
echo "$output"

# 返回原始退出码
exit $exit_code
