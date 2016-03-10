// TODO get error:
// /packages/lorensr_server-session/server-session.js: 'import' and 'export' may only appear at the top level (26:0)
// export const Session = {

Session = {

  get store() {
    let {connection} = DDP._CurrentInvocation.get();

    if (!connection['_server-session'])
      connection['_server-session'] = {};

    return connection['_server-session'];
  },

  get(key) {
    return this.store[key];
  },

  set(key, value) {
    this.store[key] = value;
  },

  equals(key, testValue) {
    return this.get(key) === testValue;
  }

};

