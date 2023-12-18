import type Peer from '../domain/Peer'
import type PeerFactory from '../application/PeerFactory'
import type PeerIdentifier from '../domain/PeerIdentifier'
import type SignalingChannel from '../../signaling/domain/SignalingChannel'
import { PEER_TO_PEER_CONFIG } from './PeerConstants'
import PeerConnectionWebRtc from './PeerConnectionWebRtc'

export default class RTCPeerFactory implements PeerFactory {
  constructor(private readonly signalingChannel: SignalingChannel) {}

  createPeerConnection(
    selfPeerId: PeerIdentifier,
    targetPeerId: PeerIdentifier,
    polite: boolean,
  ): Peer {
    return new PeerConnectionWebRtc(
      selfPeerId,
      targetPeerId,
      polite,
      this.signalingChannel,
      PEER_TO_PEER_CONFIG,
    )
  }
}
