import consola from 'consola'
import type CandidateEvent from '../domain/CandidateEvent'
import type PeerConnectionWebRtc from './PeerConnectionWebRtc'

export async function loadIceCandidate({ candidate }: CandidateEvent, peer: PeerConnectionWebRtc) {
  try {
    await peer.peerConnection.addIceCandidate(candidate)
    consola.debug('Candidate added successfully: ', candidate)
  }
  catch (error) {
    if (!peer.ignoreOffer)
      consola.error('Error adding candidate: ', error)
  }
}
