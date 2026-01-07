import { useRef, useEffect } from 'react'
import { Tldraw, InstancePresenceRecordType, Editor } from 'tldraw'
import 'tldraw/tldraw.css'

// Section types
type Section = 'hero' | 'whiteboards' | 'windows'
type Pattern = 'float' | 'scan-text' | 'point'

interface CursorConfig {
  targetX: number
  targetY: number
  message: string
  pattern: Pattern
}

// Cursor colors
const CURSOR_COLORS = ['#0066FF', '#5D00FF', '#FF6F00', '#FFD700'] // blue, phantom, flame, yellow

// Get section configs dynamically based on viewport
function getSectionConfigs(viewportWidth: number, viewportHeight: number): Record<Section, CursorConfig[]> {
  const centerX = viewportWidth / 2
  const heroContentWidth = Math.min(600, viewportWidth * 0.7) // scale down on smaller screens
  const margin = Math.max(50, viewportWidth * 0.05) // responsive margin
  const leftEdge = centerX - heroContentWidth / 2 - margin
  const rightEdge = centerX + heroContentWidth / 2 + margin

  // Clamp function to keep cursors on screen
  const clampX = (x: number) => Math.max(30, Math.min(viewportWidth - 30, x))
  const clampY = (y: number) => Math.max(30, Math.min(viewportHeight - 30, y))

  // Check if mobile (md breakpoint is 768px)
  const isMobile = viewportWidth < 768

  // Whiteboards: desktop = right of text (text is on right), mobile = below text
  // Windows: desktop = left of text (text is on left), mobile = below text
  const whiteboardsX = isMobile ? centerX : 200 // left side on desktop, more to the left
  const windowsX = isMobile ? centerX : viewportWidth - 200 // right side on desktop
  const belowTextY = isMobile ? viewportHeight * 0.6 : viewportHeight * 0.52 // slightly below text

  return {
    hero: [
      // Top cursors on outer edges - blue (top left)
      { targetX: clampX(leftEdge - 30), targetY: clampY(viewportHeight * 0.25), message: '', pattern: 'float' },
      // Bottom cursors more toward center - purple (bottom left, closer to center)
      { targetX: clampX(centerX - 200), targetY: clampY(viewportHeight * 0.55), message: '', pattern: 'float' },
      // Top right - orange
      { targetX: clampX(rightEdge + 30), targetY: clampY(viewportHeight * 0.3), message: '', pattern: 'float' },
      // Bottom right, closer to center - yellow
      { targetX: clampX(centerX + 200), targetY: clampY(viewportHeight * 0.6), message: '', pattern: 'float' },
    ],
    whiteboards: [
      // Desktop: right of text, Mobile: below text
      { targetX: clampX(whiteboardsX - 40), targetY: clampY(belowTextY), message: 'Reading...', pattern: 'scan-text' },
      { targetX: clampX(whiteboardsX), targetY: clampY(belowTextY + 40), message: 'Good idea!', pattern: 'scan-text' },
      { targetX: clampX(whiteboardsX + 40), targetY: clampY(belowTextY + 80), message: '', pattern: 'scan-text' },
      { targetX: clampX(whiteboardsX - 20), targetY: clampY(belowTextY + 120), message: '', pattern: 'scan-text' },
    ],
    windows: [
      // Desktop: left of text, Mobile: below text
      { targetX: clampX(windowsX + 40), targetY: clampY(belowTextY), message: 'Look at this!', pattern: 'point' },
      { targetX: clampX(windowsX), targetY: clampY(belowTextY + 40), message: 'Nice!', pattern: 'point' },
      { targetX: clampX(windowsX - 40), targetY: clampY(belowTextY + 80), message: '', pattern: 'point' },
      { targetX: clampX(windowsX + 20), targetY: clampY(belowTextY + 120), message: '', pattern: 'point' },
    ],
  }
}

// Linear interpolation helper
function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

// Get current section from scroll progress
function getSection(scrollProgress: number): Section {
  if (scrollProgress < 0.3) return 'hero'
  if (scrollProgress < 0.65) return 'whiteboards'
  return 'windows'
}

// Calculate cursor position based on pattern and time
function calculatePosition(
  config: CursorConfig,
  time: number,
  index: number
): { x: number; y: number } {
  const { targetX, targetY, pattern } = config

  switch (pattern) {
    case 'float': {
      // Very subtle idle movement - barely noticeable
      const phaseOffset = index * 0.7
      const x = targetX + Math.sin((time * 0.2 + phaseOffset) * Math.PI * 2) * 5
      const y = targetY + Math.cos((time * 0.15 + phaseOffset) * Math.PI * 2) * 4
      return { x, y }
    }
    case 'scan-text': {
      // Horizontal sweep across text area with slight wave
      const scanWidth = 200
      const phaseOffset = index * 0.15
      const scanProgress = ((time * 0.3 + phaseOffset) % 1)
      const x = targetX - scanWidth / 2 + scanProgress * scanWidth
      const y = targetY + Math.sin(time * 3 + index) * 8
      return { x, y }
    }
    case 'point': {
      // Converge on target with small jitter
      const jitterX = Math.sin(time * 5 + index * 2) * 8
      const jitterY = Math.cos(time * 4 + index * 3) * 8
      return { x: targetX + jitterX, y: targetY + jitterY }
    }
    default:
      return { x: targetX, y: targetY }
  }
}

export function CursorOverlay() {
  const rafRef = useRef<number>(-1)
  const editorRef = useRef<Editor | null>(null)
  const presencesRef = useRef<ReturnType<typeof InstancePresenceRecordType.create>[]>([])
  const scrollProgressRef = useRef(0)
  const viewportRef = useRef({ width: window.innerWidth, height: window.innerHeight })

  // Initialize positions based on current viewport
  const getInitialPositions = () => {
    const configs = getSectionConfigs(window.innerWidth, window.innerHeight)
    return configs.hero.map(c => ({ x: c.targetX, y: c.targetY }))
  }
  const currentPositionsRef = useRef<{ x: number; y: number }[]>(getInitialPositions())

  // Track scroll position and viewport size
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      scrollProgressRef.current = progress
    }

    const handleResize = () => {
      viewportRef.current = { width: window.innerWidth, height: window.innerHeight }
    }

    // Initial calls
    handleScroll()
    handleResize()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current !== -1) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="tldraw-cursor-overlay fixed inset-0 z-50 pointer-events-none [&_.tl-collaborator__cursor]:scale-[3] [&_.tl-collaborator__cursor]:origin-top-left [&_.tl-cursor-label]:text-base [&_.tl-cursor-label]:px-3 [&_.tl-cursor-label]:py-1.5">
      <Tldraw
        hideUi
        onMount={(editor) => {
          editorRef.current = editor

          // Create presence records for each cursor
          presencesRef.current = CURSOR_COLORS.map((color, index) => {
            return InstancePresenceRecordType.create({
              id: InstancePresenceRecordType.createId(`user-${index}`),
              currentPageId: editor.getCurrentPageId(),
              userId: `user-${index}`,
              userName: '',
              color: color,
              cursor: { x: 300 + index * 100, y: 250 + index * 50, type: 'default', rotation: 0 },
              chatMessage: '',
            })
          })

          // Add all presences to the store
          editor.store.mergeRemoteChanges(() => {
            editor.store.put(presencesRef.current)
          })

          // Animation loop
          function loop() {
            const now = Date.now()
            const time = now / 1000 // Convert to seconds for smoother math
            const currentScroll = scrollProgressRef.current
            const section = getSection(currentScroll)
            const { width, height } = viewportRef.current
            const sectionConfigs = getSectionConfigs(width, height)
            const configs = sectionConfigs[section]

            const updatedPresences = presencesRef.current.map((presence, index) => {
              const config = configs[index]
              const targetPos = calculatePosition(config, time, index)

              // Smooth interpolation toward target position
              const currentPos = currentPositionsRef.current[index]
              const lerpFactor = 0.08 // Adjust for smoother/faster transitions
              const newX = lerp(currentPos.x, targetPos.x, lerpFactor)
              const newY = lerp(currentPos.y, targetPos.y, lerpFactor)

              currentPositionsRef.current[index] = { x: newX, y: newY }

              // Determine chat message with typing effect
              let chatMessage = ''
              if (config.message) {
                const messageK = 6000
                const messageT = (now % messageK) / messageK
                if (messageT > 0.3 && messageT < 0.8) {
                  const progress = (messageT - 0.3) / 0.3
                  chatMessage = config.message.slice(0, Math.ceil(Math.min(progress, 1) * config.message.length))
                } else if (messageT >= 0.8) {
                  chatMessage = config.message
                }
              }

              return {
                ...presence,
                cursor: { ...presence.cursor, x: newX, y: newY },
                chatMessage,
                lastActivityTimestamp: now,
              }
            })

            editor.store.mergeRemoteChanges(() => {
              editor.store.put(updatedPresences)
            })

            rafRef.current = editor.timers.requestAnimationFrame(loop)
          }

          rafRef.current = editor.timers.requestAnimationFrame(loop)
        }}
      />
    </div>
  )
}
