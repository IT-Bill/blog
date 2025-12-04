import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

/**
 * 带有 BASE_URL 前缀的链接组件
 * 自动处理站点部署在子路径时的 URL 前缀问题
 */
export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  // 获取 BASE_URL，移除末尾的斜杠（如果有）
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
  
  // 只处理以 / 开头的内部链接，外部链接和锚点链接保持不变
  const resolvedHref = href.startsWith('/') ? `${base}${href}` : href;
  
  return (
    <a href={resolvedHref} {...props}>
      {children}
    </a>
  );
};
