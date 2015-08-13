"use strict";

var socket  = require("socket.io");
var Steward = require("emitter-steward");

/**
 * Plugin interface
 * @returns {*|function(this:exports)}
 */
module.exports.plugin = function (server, clientEvents, bs) {
    return exports.init(server, clientEvents, bs);
};

/**
 * @param {http.Server} server
 * @param clientEvents
 * @param {BrowserSync} bs
 */
module.exports.init = function (server, clientEvents, bs) {

    var emitter  = bs.events;
    var socketConfig = bs.options.get("socket").toJS();

    var io = socket.listen(server, {log: false, path: socketConfig.path});

    // Override default namespace.
    io.sockets = io.of(socketConfig.namespace);

    io.set("heartbeat interval", socketConfig.clients.heartbeatTimeout);

    var steward  = new Steward(emitter);

    /**
     * Listen for new connections
     */
    io.sockets.on("connection", handleConnection);

    /**
     * Handle each new connection
     * @param {Object} client
     */
    function handleConnection (client) {

        // set ghostmode callbacks
        if (bs.options.get("ghostMode")) {

            addGhostMode(client);
        }

        client.emit("connection", bs.options.toJS()); //todo - trim the amount of options sent to clients

        emitter.emit("client:connected", {
            ua: client.handshake.headers["user-agent"]
        });
    }

    /**
     * @param {string} event
     * @param {Socket.client} client
     * @param {Object} data
     */
    function handleClientEvent(event, client, data) {

        if (steward.valid(client.id)) {

            client.broadcast.emit(event, data);
        }
    }

    /**
     * @param client
     */
    function addGhostMode (client) {

        clientEvents.forEach(addEvent);

        function addEvent(event) {

            client.on(event, handleClientEvent.bind(null, event, client));
        }
    }

    return io;
};
