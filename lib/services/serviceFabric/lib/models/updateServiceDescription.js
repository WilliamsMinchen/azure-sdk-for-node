/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UpdateServiceDescription class.
 * @constructor
 * The description of the update service
 * @member {number} [flags]
 * 
 * @member {string} ServiceKind Polymorhpic Discriminator
 * 
 */
function UpdateServiceDescription() {
}

/**
 * Defines the metadata of UpdateServiceDescription
 *
 * @returns {object} metadata of UpdateServiceDescription
 *
 */
UpdateServiceDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UpdateServiceDescription',
    type: {
      name: 'Composite',
      polymorphicDiscriminator: 'ServiceKind',
      uberParent: 'UpdateServiceDescription',
      className: 'UpdateServiceDescription',
      modelProperties: {
        flags: {
          required: false,
          serializedName: 'Flags',
          type: {
            name: 'Number'
          }
        },
        ServiceKind: {
          required: true,
          serializedName: 'ServiceKind',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UpdateServiceDescription;
