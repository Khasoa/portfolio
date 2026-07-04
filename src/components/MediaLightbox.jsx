import { useEffect } from "react"
import { X } from "lucide-react"

function useLightboxLock(open, onClose) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])
}

function LightboxStyles() {
  return (
    <style>{`
      .media-lightbox {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: clamp(20px, 4vw, 32px);
        background: rgba(15, 23, 42, 0.48);
        backdrop-filter: blur(4px);
        animation: lightboxIn 0.18s ease;
      }
      @keyframes lightboxIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .media-lightbox__panel {
        position: relative;
        width: min(820px, 94vw);
        max-height: 88vh;
        display: flex;
        flex-direction: column;
        background: var(--surface-raised);
        border: 1px solid var(--border-strong);
        border-radius: var(--radius-lg);
        box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
        overflow: hidden;
        animation: panelIn 0.22s ease;
      }
      @keyframes panelIn {
        from { opacity: 0; transform: translateY(8px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .media-lightbox__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px 12px 16px;
        border-bottom: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.72);
      }
      .media-lightbox__title {
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
        margin: 0;
      }
      .media-lightbox__close {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px solid var(--border);
        border-radius: 999px;
        background: var(--surface-raised);
        color: var(--text);
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 7px 12px;
        cursor: pointer;
        transition: background 0.18s, border-color 0.18s;
      }
      .media-lightbox__close:hover {
        background: var(--bg-subtle);
        border-color: var(--border-strong);
      }
      .media-lightbox__body {
        padding: 14px;
        background: #1E293B;
        overflow: auto;
      }
      .media-lightbox__img {
        display: block;
        width: 100%;
        height: auto;
        max-height: calc(88vh - 72px);
        object-fit: contain;
        object-position: center;
        border-radius: calc(var(--radius-md) - 2px);
      }
      .media-lightbox__video {
        display: block;
        width: 100%;
        max-height: calc(88vh - 72px);
        border-radius: calc(var(--radius-md) - 2px);
        background: #0F172A;
      }
      .media-lightbox__caption {
        padding: 10px 16px 14px;
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.04em;
        color: var(--muted2);
        border-top: 1px solid var(--border);
        margin: 0;
      }
    `}</style>
  )
}

export function ImageLightbox({ src, alt, open, onClose }) {
  useLightboxLock(open, onClose)
  if (!open) return null

  return (
    <>
      <LightboxStyles />
      <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
        <div className="media-lightbox__panel" onClick={(e) => e.stopPropagation()}>
          <div className="media-lightbox__header">
            <p className="media-lightbox__title">Workflow diagram</p>
            <button type="button" className="media-lightbox__close" onClick={onClose}>
              <X size={14} aria-hidden="true" />
              Close
            </button>
          </div>
          <div className="media-lightbox__body">
            <img src={src} alt={alt} className="media-lightbox__img" />
          </div>
        </div>
      </div>
    </>
  )
}

export function VideoLightbox({ src, title, open, onClose }) {
  useLightboxLock(open, onClose)
  if (!open) return null

  return (
    <>
      <LightboxStyles />
      <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
        <div className="media-lightbox__panel" onClick={(e) => e.stopPropagation()}>
          <div className="media-lightbox__header">
            <p className="media-lightbox__title">Workflow demo</p>
            <button type="button" className="media-lightbox__close" onClick={onClose}>
              <X size={14} aria-hidden="true" />
              Close
            </button>
          </div>
          <div className="media-lightbox__body">
            <video src={src} className="media-lightbox__video" controls autoPlay playsInline />
          </div>
          {title && <p className="media-lightbox__caption">{title}</p>}
        </div>
      </div>
    </>
  )
}
