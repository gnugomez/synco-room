import type { Observable } from 'rxjs'
import { Subject } from 'rxjs'
import type SignalingChannel from '../domain/SignalingChannel'
import type SignalingMessage from '../domain/SignalingMessage'

export default class InMemorySignalingChannel implements SignalingChannel {
  private messagesSubject = new Subject<SignalingMessage>()

  channelName: string
  messages: Observable<SignalingMessage> = this.messagesSubject.asObservable()

  constructor(channelName: string) {
    this.channelName = channelName
  }

  postMessage: <T>(message: SignalingMessage<T>) => void = (message) => {
    this.messagesSubject.next(message)
  }
}
