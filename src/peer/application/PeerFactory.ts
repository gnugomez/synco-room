import type PeerIdentifier from '../domain/PeerIdentifier'
import type Peer from '../domain/Peer'
import type SignalingChannel from '../../signaling/domain/SignalingChannel'
import { WebRtcPeerFactory } from '..'

export default interface PeerFactory {
  createPeerConnection(
    selfPeerId: PeerIdentifier,
    targetPeerId: PeerIdentifier,
    polite: boolean,
  ): Peer
}

export function createPeerFactory(signalingChannel: SignalingChannel): PeerFactory {
  return new WebRtcPeerFactory(signalingChannel)
}
