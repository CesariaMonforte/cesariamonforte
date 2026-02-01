import { useState } from "react";
import styles from "./CodeSnippetBox.module.css";

function highlightCode(code, stylesMap) {
  if (!code || typeof code !== "string") return [code ?? ""];

  const tokens = [];
  let lastIndex = 0;

  // Match in order: single-line comment, double string, single string, keyword, number
  const re =
    /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b(const|let|var|async|await|try|catch|throw|return|export|import|from|default|function|if|else|new|typeof|instanceof|in|of|true|false|null|undefined)\b)|(\d+\.?\d*)/g;

  let m;
  while ((m = re.exec(code)) !== null) {
    if (m.index > lastIndex) {
      tokens.push({ type: "raw", value: code.slice(lastIndex, m.index) });
    }
    if (m[1]) tokens.push({ type: "comment", value: m[1] });
    else if (m[2] || m[3]) tokens.push({ type: "string", value: m[0] });
    else if (m[4]) tokens.push({ type: "keyword", value: m[0] });
    else if (m[6]) tokens.push({ type: "number", value: m[6] });
    lastIndex = re.lastIndex;
  }
  if (lastIndex < code.length) {
    tokens.push({ type: "raw", value: code.slice(lastIndex) });
  }

  return tokens.map((t, i) => {
    if (t.type === "raw") return <span key={i}>{t.value}</span>;
    if (t.type === "comment")
      return (
        <span key={i} className={stylesMap.hl_comment}>
          {t.value}
        </span>
      );
    if (t.type === "string")
      return (
        <span key={i} className={stylesMap.hl_string}>
          {t.value}
        </span>
      );
    if (t.type === "keyword")
      return (
        <span key={i} className={stylesMap.hl_keyword}>
          {t.value}
        </span>
      );
    if (t.type === "number")
      return (
        <span key={i} className={stylesMap.hl_number}>
          {t.value}
        </span>
      );
    return <span key={i}>{t.value}</span>;
  });
}

function CodeSnippetBox({ tabs }) {
  const tabList = Array.isArray(tabs) ? tabs : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabList.length === 0) return null;

  const activeTab = tabList[activeIndex];
  const rawCode = activeTab?.content ?? activeTab?.code ?? "";
  const highlighted = highlightCode(rawCode, styles);

  return (
    <div className={styles.code_snippet_box}>
      <div className={styles.code_snippet_tabs}>
        {tabList.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={
              index === activeIndex
                ? styles.code_snippet_tab_active
                : styles.code_snippet_tab
            }
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.code_snippet_content}>
        <pre className={styles.code_snippet_pre}>
          <code className={styles.code_snippet_code}>{highlighted}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeSnippetBox;
