export default class PeerIdentifier {
  private constructor(readonly id: string) {}

  static create = (id: string) => {
    return new PeerIdentifier(id)
  }

  static areEqual = (
    peerIdentifier1: PeerIdentifier,
    peerIdentifier2: PeerIdentifier,
  ) => {
    return peerIdentifier1.id === peerIdentifier2.id
  }
}
