import consola from 'consola'
import DescriptionEvent from '../domain/DescriptionEvent'
import { PeerConnectionActions } from '../domain/PeerConnectionActions'
import type PeerConnectionWebRtc from './PeerConnectionWebRtc'

export async function handleDescriptionReceived(
  peer: PeerConnectionWebRtc,
  peerDescriptionEvent: DescriptionEvent,
  peerConnection: RTCPeerConnection,
) {
  const { description } = peerDescriptionEvent

  if (description.type === 'offer') {
    const isCollisioningOffer
      = peer.makingOffer.value || peer._signalingState.value !== 'stable'

    peer.ignoreOffer = !peer.polite && isCollisioningOffer

    if (peer.ignoreOffer) {
      consola.error(
        'Ignoring offer from peer because of collision',
        peerDescriptionEvent,
      )
      return
    }
  }

  try {
    await peerConnection.setRemoteDescription(description)
  }
  catch (error) {
    consola.error('Error setting remote description: ', error)
  }

  if (description.type === 'offer') {
    consola.debug('Creating answer')
    await peerConnection.setLocalDescription()
    consola.debug(
      'Description answer ready to be sent: ',
      peerConnection.localDescription,
    )

    peerConnection.localDescription
    && peer.sendPeerConnectionEvent(
      PeerConnectionActions.DESCRIPTION,
      new DescriptionEvent(
        peer.selfIdentifier,
        peer.targetIdentifier,
        JSON.parse(JSON.stringify(peerConnection.localDescription)),
      ),
    )
  }
}
