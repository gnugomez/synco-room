import type { Observable } from 'rxjs'
import type { SignalingState } from '../../signaling/domain/SignalingState'
import type RoomEvent from '../../room/domain/RoomEvent'
import type PeerIdentifier from './PeerIdentifier'
import type { PeerConnectionState } from './PeerConnectionState'
import type PeerMessage from './PeerMessage'

export default interface PeerConnection {
  readonly selfIdentifier: PeerIdentifier
  readonly targetIdentifier: PeerIdentifier
  readonly signalingState: Observable<SignalingState>
  readonly connectionState: Observable<PeerConnectionState>
  readonly polite: boolean
  readonly messages: Observable<PeerMessage<RoomEvent>>
  sendMessage(message: PeerMessage<RoomEvent>): void
}