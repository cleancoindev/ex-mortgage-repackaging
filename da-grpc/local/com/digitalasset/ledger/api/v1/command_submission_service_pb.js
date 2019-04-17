/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');
goog.object.extend(proto, com_digitalasset_ledger_api_v1_trace_context_pb);
var com_digitalasset_ledger_api_v1_commands_pb = require('../../../../../com/digitalasset/ledger/api/v1/commands_pb.js');
goog.object.extend(proto, com_digitalasset_ledger_api_v1_commands_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.com.digitalasset.ledger.api.v1.SubmitRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.com.digitalasset.ledger.api.v1.SubmitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.digitalasset.ledger.api.v1.SubmitRequest.displayName = 'proto.com.digitalasset.ledger.api.v1.SubmitRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.digitalasset.ledger.api.v1.SubmitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.digitalasset.ledger.api.v1.SubmitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commands: (f = msg.getCommands()) && com_digitalasset_ledger_api_v1_commands_pb.Commands.toObject(includeInstance, f),
    traceContext: (f = msg.getTraceContext()) && com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.digitalasset.ledger.api.v1.SubmitRequest}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.digitalasset.ledger.api.v1.SubmitRequest;
  return proto.com.digitalasset.ledger.api.v1.SubmitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.digitalasset.ledger.api.v1.SubmitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.digitalasset.ledger.api.v1.SubmitRequest}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new com_digitalasset_ledger_api_v1_commands_pb.Commands;
      reader.readMessage(value,com_digitalasset_ledger_api_v1_commands_pb.Commands.deserializeBinaryFromReader);
      msg.setCommands(value);
      break;
    case 1000:
      var value = new com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext;
      reader.readMessage(value,com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.deserializeBinaryFromReader);
      msg.setTraceContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.digitalasset.ledger.api.v1.SubmitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.digitalasset.ledger.api.v1.SubmitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommands();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      com_digitalasset_ledger_api_v1_commands_pb.Commands.serializeBinaryToWriter
    );
  }
  f = message.getTraceContext();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commands commands = 1;
 * @return {?proto.com.digitalasset.ledger.api.v1.Commands}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.getCommands = function() {
  return /** @type{?proto.com.digitalasset.ledger.api.v1.Commands} */ (
    jspb.Message.getWrapperField(this, com_digitalasset_ledger_api_v1_commands_pb.Commands, 1));
};


/** @param {?proto.com.digitalasset.ledger.api.v1.Commands|undefined} value */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.setCommands = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.clearCommands = function() {
  this.setCommands(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.hasCommands = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TraceContext trace_context = 1000;
 * @return {?proto.com.digitalasset.ledger.api.v1.TraceContext}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.getTraceContext = function() {
  return /** @type{?proto.com.digitalasset.ledger.api.v1.TraceContext} */ (
    jspb.Message.getWrapperField(this, com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext, 1000));
};


/** @param {?proto.com.digitalasset.ledger.api.v1.TraceContext|undefined} value */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.setTraceContext = function(value) {
  jspb.Message.setWrapperField(this, 1000, value);
};


proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.clearTraceContext = function() {
  this.setTraceContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.digitalasset.ledger.api.v1.SubmitRequest.prototype.hasTraceContext = function() {
  return jspb.Message.getField(this, 1000) != null;
};


goog.object.extend(exports, proto.com.digitalasset.ledger.api.v1);
