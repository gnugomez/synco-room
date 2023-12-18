import type { Observable } from 'rxjs'
import type { SignalingState } from '../../signaling/domain/SignalingState'
import type PeerIdentifier from './PeerIdentifier'
import type { PeerConnectionState } from './PeerConnectionState'
import type PeerMessage from './PeerMessage'

export default abstract class Peer {
  constructor(
    readonly selfIdentifier: PeerIdentifier,
    readonly targetIdentifier: PeerIdentifier,
    readonly signalingState: Observable<SignalingState>,
    readonly connectionState: Observable<PeerConnectionState>,
    readonly polite: boolean,
    readonly messages: Observable<PeerMessage<unknown>>,
  ) {}

  abstract sendMessage(_message: PeerMessage<unknown>): void
}
