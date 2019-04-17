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

goog.exportSymbol('proto.com.digitalasset.ledger.api.v1.LedgerOffset', null, global);
goog.exportSymbol('proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary', null, global);

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
proto.com.digitalasset.ledger.api.v1.LedgerOffset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_);
};
goog.inherits(proto.com.digitalasset.ledger.api.v1.LedgerOffset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.digitalasset.ledger.api.v1.LedgerOffset.displayName = 'proto.com.digitalasset.ledger.api.v1.LedgerOffset';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.ValueCase = {
  VALUE_NOT_SET: 0,
  ABSOLUTE: 1,
  BOUNDARY: 2
};

/**
 * @return {proto.com.digitalasset.ledger.api.v1.LedgerOffset.ValueCase}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.getValueCase = function() {
  return /** @type {proto.com.digitalasset.ledger.api.v1.LedgerOffset.ValueCase} */(jspb.Message.computeOneofCase(this, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_[0]));
};



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
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.toObject = function(opt_includeInstance) {
  return proto.com.digitalasset.ledger.api.v1.LedgerOffset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.digitalasset.ledger.api.v1.LedgerOffset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.toObject = function(includeInstance, msg) {
  var f, obj = {
    absolute: jspb.Message.getFieldWithDefault(msg, 1, ""),
    boundary: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.com.digitalasset.ledger.api.v1.LedgerOffset}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.digitalasset.ledger.api.v1.LedgerOffset;
  return proto.com.digitalasset.ledger.api.v1.LedgerOffset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.digitalasset.ledger.api.v1.LedgerOffset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.digitalasset.ledger.api.v1.LedgerOffset}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbsolute(value);
      break;
    case 2:
      var value = /** @type {!proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary} */ (reader.readEnum());
      msg.setBoundary(value);
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
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.digitalasset.ledger.api.v1.LedgerOffset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.digitalasset.ledger.api.v1.LedgerOffset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary = {
  LEDGER_BEGIN: 0,
  LEDGER_END: 1
};

/**
 * optional string absolute = 1;
 * @return {string}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.getAbsolute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.setAbsolute = function(value) {
  jspb.Message.setOneofField(this, 1, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_[0], value);
};


proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.clearAbsolute = function() {
  jspb.Message.setOneofField(this, 1, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.hasAbsolute = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LedgerBoundary boundary = 2;
 * @return {!proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.getBoundary = function() {
  return /** @type {!proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.com.digitalasset.ledger.api.v1.LedgerOffset.LedgerBoundary} value */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.setBoundary = function(value) {
  jspb.Message.setOneofField(this, 2, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_[0], value);
};


proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.clearBoundary = function() {
  jspb.Message.setOneofField(this, 2, proto.com.digitalasset.ledger.api.v1.LedgerOffset.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.digitalasset.ledger.api.v1.LedgerOffset.prototype.hasBoundary = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.com.digitalasset.ledger.api.v1);
