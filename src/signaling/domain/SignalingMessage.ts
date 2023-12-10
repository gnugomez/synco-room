export default class SignalingMessage<T = unknown> {
  constructor(
    readonly action: string,
    readonly payload: T,
  ) {}
}
