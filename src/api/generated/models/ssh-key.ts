/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ActionRelation } from './action-relation';
import { EnvironmentRelation } from './environment-relation';
import { ServerRelation } from './server-relation';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface SshKey
 */
export interface SshKey {
    /**
     * The Id of the given SSH public key
     * @type {number}
     * @memberof SshKey
     */
    id: number;
    /**
     * The project id that the SSH public key belongs to
     * @type {number}
     * @memberof SshKey
     */
    project_id?: number;
    /**
     * The name entered by the user to uniquely identify the public SSH key
     * @type {string}
     * @memberof SshKey
     */
    name: string;
    /**
     * The Id of the user to which the SSH key belongs to
     * @type {number}
     * @memberof SshKey
     */
    created_by?: number;
    /**
     * The hashed fingerprint of the public key
     * @type {string}
     * @memberof SshKey
     */
    fingerprint: string;
    /**
     * 
     * @type {UserRelation}
     * @memberof SshKey
     */
    created_by_user: UserRelation;
    /**
     * 
     * @type {Array<EnvironmentRelation>}
     * @memberof SshKey
     */
    environments: Array<EnvironmentRelation>;
    /**
     * 
     * @type {Array<ServerRelation>}
     * @memberof SshKey
     */
    servers: Array<ServerRelation>;
    /**
     * 
     * @type {ActionRelation}
     * @memberof SshKey
     */
    last_action: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof SshKey
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof SshKey
     */
    updated_at?: string;
}

