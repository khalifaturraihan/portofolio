import { useState } from 'react'
import { mono } from '../themes'

const STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:9999;width:240px;
    background:rgba(13,17,23,0.92);color:#e6eaf6;
    backdrop-filter:blur(24px) saturate(160%);-webkit-backdrop-filter:blur(24px) saturate(160%);
    border:1px solid #2a3444;border-radius:14px;
    box-shadow:0 12px 40px rgba(0,0,0,.5);
    font:12px/1.4 'Space Grotesk',ui-sans-serif,system-ui,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;cursor:move;user-select:none;border-bottom:1px solid #1e2530}
  .twk-hd b{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#5a6a85}
  .twk-x{appearance:none;border:0;background:transparent;color:#5a6a85;width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:1}
  .twk-x:hover{background:#1e2530;color:#e6eaf6}
  .twk-body{padding:12px 14px;display:flex;flex-direction:column;gap:10px}
  .twk-lbl{font-size:10.5px;color:#5a6a85;margin-bottom:6px;letter-spacing:.04em}
  .twk-seg{display:flex;padding:2px;border-radius:8px;background:#13181f;border:1px solid #1e2530;position:relative}
  .twk-seg button{flex:1;border:0;background:transparent;color:#a0aec0;font:inherit;font-size:11px;padding:5px 8px;border-radius:6px;cursor:pointer;transition:all .15s}
  .twk-seg button.active{background:#818cf8;color:#fff}
`

export default function TweaksPanel({ theme, onChange }) {
  const [open, setOpen] = useState(false)
  const options = [
    { value: 'terminal', label: 'Dark' },
    { value: 'clean',    label: 'Light' },
    { value: 'amber',    label: 'Amber' },
  ]
  return (
    <>
      <style>{STYLE}</style>
      {/* Toggle button */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', right: 16, bottom: 16, zIndex: 9998,
        width: 40, height: 40, borderRadius: '50%',
        background: open ? 'transparent' : '#818cf8',
        border: '1px solid #818cf855',
        color: '#fff', fontSize: 16, cursor: 'pointer',
        display: open ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px #818cf855',
        transition: 'all .2s',
      }} title="Theme switcher">
        🎨
      </button>
      {open && (
        <div className="twk-panel">
          <div className="twk-hd">
            <b>Theme</b>
            <button className="twk-x" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="twk-body">
            <div className="twk-lbl">Choose theme</div>
            <div className="twk-seg">
              {options.map(o => (
                <button key={o.value} className={theme === o.value ? 'active' : ''} onClick={() => onChange(o.value)}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
