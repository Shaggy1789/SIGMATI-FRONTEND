// Preparado para SSE con fetch + ReadableStream (FASE 6)
// Requiere Authorization: Bearer <token> según documentación del backend
// GET /api/events/stream con tipos: telemetry, alert, device-status, sensor-status, automation, automation-failed

export type SseEventType =
  | 'telemetry'
  | 'alert'
  | 'device-status'
  | 'sensor-status'
  | 'automation'
  | 'automation-failed'

export interface SseEvent<T = any> {
  eventType: SseEventType
  eventId?: string
  data: T
}

export interface RealtimeSubscription {
  close: () => void
  isActive: () => boolean
}

export class EventsService {
  private controller: AbortController | null = null
  private active = false

  async connect(
    _onEvent: (event: SseEvent) => void,
    options?: {
      eventTypes?: SseEventType[]
      onError?: (error: unknown) => void
      onOpen?: () => void
    }
  ): Promise<RealtimeSubscription> {
    if (this.active) {
      this.disconnect()
    }

    const token = localStorage.getItem('accessToken')
    if (!token) {
      throw new Error('No access token available for SSE connection')
    }

    this.controller = new AbortController()
    this.active = true

    // Implementación con fetch + ReadableStream se hará en FASE 6
    // Por ahora solo estructura preparada
    options?.onOpen?.()

    return {
      close: () => this.disconnect(),
      isActive: () => this.active
    }
  }

  disconnect(): void {
    if (this.controller) {
      this.controller.abort()
      this.controller = null
    }
    this.active = false
  }

  isConnected(): boolean {
    return this.active
  }
}

export const eventsService = new EventsService()
export default eventsService