// Rotating Chinese flashcard for Übersicht

export const refreshFrequency = 60 * 60 * 1000 // 1 hour
export const label = "Chinese Flashcard"
export const icon = "🀄"

const phraseFilePath = '/Users/gagalund/Library/Application Support/Übersicht/widgets/rotating-phrases.widget/phrases.txt'

export const command = `cat "${phraseFilePath}"`

export const className = `
  top: 35px;
  right: 20px;
  width: 260px;
  pointer-events: none;
  z-index: 999999;
`

export const render = ({ output = "" }) => {
  const lines = output
    .trim()
    .split("\n")
    .filter(line => line.includes("|"))

  const fallback = ["加载中", "Jiāzài zhōng", "Loading..."]

  const randomLine =
    lines.length > 0
      ? lines[Math.floor(Math.random() * lines.length)]
      : fallback.join("|")

  const parts = randomLine.split("|")

  const chinese = parts[0] || fallback[0]
  const pinyin = parts[1] || fallback[1]
  const english = parts[2] || fallback[2]

  return (
    <div
      style={{
        width: "260px",
        background: "#6f2f3f",
        color: "#f7f3f3",
        fontFamily: "Georgia, 'Times New Roman', serif",
        padding: "20px 22px",
        borderRadius: "16px",
        boxShadow: "0 8px 22px rgba(0, 0, 0, 0.22)",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "34px",
          lineHeight: "1.2",
          color: "#ffffff",
          marginBottom: "12px",
          letterSpacing: "0.5px",
        }}
      >
        {chinese}
      </div>

      <div
        style={{
          fontSize: "20px",
          lineHeight: "1.25",
          color: "#ded6d8",
          fontStyle: "italic",
          marginBottom: "10px",
        }}
      >
        {pinyin}
      </div>

      <div
        style={{
          fontSize: "18px",
          lineHeight: "1.25",
          color: "#cfc7ca",
        }}
      >
        {english}
      </div>
    </div>
  )
}