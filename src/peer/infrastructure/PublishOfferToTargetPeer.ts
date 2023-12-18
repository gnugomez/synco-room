import consola from 'consola'
import DescriptionEvent from '../domain/DescriptionEvent'
import { PeerConnectionActions } from '../domain/PeerConnectionActions'
import type PeerConnectionWebRtc from './PeerConnectionWebRtc'

export async function publishOfferToTargetPeer(
  {
    peerConnection,
    sendPeerConnectionEvent: sendSignalingEvent,
    makingOffer,
    selfIdentifier,
    targetIdentifier,
  }: PeerConnectionWebRtc,
) {
  consola.debug('Negotiation needed fired')

  try {
    makingOffer.next(true)
    await peerConnection.setLocalDescription()
    consola.debug('Description offer ready to be sent: ', peerConnection.localDescription)

    sendSignalingEvent(
      PeerConnectionActions.DESCRIPTION,
      new DescriptionEvent(
        selfIdentifier,
        targetIdentifier,
        JSON.parse(JSON.stringify(peerConnection.localDescription)),
      ),
    )
  }
  catch (err) {
    consola.error('There was an error during the negotiation: ', err)
  }
  finally {
    makingOffer.next(false)
  }
}
