let { BaseNode } = require('../base-node')

const DEFAULT_OPTIONS = {
  fixTime: true,
  timeout: 20000,
  ping: 5000
}

class ClientNode extends BaseNode {
  constructor (nodeId, log, connection, options = { }) {
    options = { ...DEFAULT_OPTIONS, ...options }
    super(nodeId, log, connection, options)
  }

  onConnect () {
    if (!this.connected) {
      this.connected = true
      this.initializing = this.initializing.then(() => {
        if (this.connected) this.sendConnect()
      })
    }
  }
}

module.exports = { ClientNode }
