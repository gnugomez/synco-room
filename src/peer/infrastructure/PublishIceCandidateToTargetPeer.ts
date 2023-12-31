import consola from 'consola'
import CandidateEvent from '../domain/CandidateEvent'
import { PeerConnectionActions } from '../domain/PeerConnectionActions'
import type WebRTCPeerConnection from './PeerConnectionWebRtc'

export function publishIceCandidateToTargetPeer(
  candidate: RTCIceCandidate,
  {
    sendPeerConnectionEvent: sendSignalingEvent,
    selfIdentifier,
    targetIdentifier,
  }: WebRTCPeerConnection,
) {
  consola.debug('Ice candidate ready to be sent: ', candidate)
  sendSignalingEvent(
    PeerConnectionActions.CANDIDATE,
    new CandidateEvent(
      selfIdentifier,
      targetIdentifier,
      JSON.parse(JSON.stringify(candidate)),
    ),
  )
}
