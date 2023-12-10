import type SignalingChannelFactory from '../application/SignalingChannelFactory'
import type SignalingChannel from '../domain/SignalingChannel'
import InMemorySignalingChannel from './InMemorySignalingChannel'

export default class InMemorySignalingChannelFactory implements SignalingChannelFactory {
  createSignalingChannel(channelName: string): SignalingChannel {
    return new InMemorySignalingChannel(channelName)
  }
}
