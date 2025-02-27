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
import { ApplicationLastDeployments } from './application-last-deployments';
import { ApplicationPipeline } from './application-pipeline';
import { ApplicationType } from './application-type';
import { EnvironmentRelation } from './environment-relation';
import { ServerRelation } from './server-relation';
import { SourceProvider } from './source-provider';
import { SslCertificateRelation } from './ssl-certificate-relation';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Application
     */
    id: number;
    /**
     * The id of the user who created the application and to whom the application belongs
     * @type {number}
     * @memberof Application
     */
    created_by: number;
    /**
     * 
     * @type {ApplicationType}
     * @memberof Application
     */
    type: ApplicationType;
    /**
     * The application\'s unique name
     * @type {string}
     * @memberof Application
     */
    name: string;
    /**
     * The domain or sub-domain through which the application deployed with these settings will be accessible. It can be a naked domain or any subdomain. If app has domain names `testing.my-app.com`, `staging.my-app.com` and `www.my-app.com` a possible good candidate for the application name would be the \"naked\" domain `my-app.com`
     * @type {string}
     * @memberof Application
     */
    domain_name?: string;
    /**
     * The full name of a repository (`repository_owner/repository_name`) containing the application source code. Required when the `source_provider_id` field is informed.
     * @type {string}
     * @memberof Application
     */
    repository?: string | null;
    /**
     * The name part of a repository full name (`repository_owner/repository_name`)
     * @type {string}
     * @memberof Application
     */
    repository_name?: string | null;
    /**
     * The owner part of a repository full name (`repository_owner/repository_name`)
     * @type {string}
     * @memberof Application
     */
    repository_owner?: string | null;
    /**
     * The version control branch that, by default, will be used when a deployment is triggered and no other branch name is informed.
     * @type {string}
     * @memberof Application
     */
    default_branch: string;
    /**
     * Indicates if push to deploy webhooks are enabled for this application. If enabled an app deployment will be automatically triggered when new changes are committed to the `default_branch`
     * @type {boolean}
     * @memberof Application
     */
    push_to_deploy?: boolean;
    /**
     * The programming language runtime environment to be used to serve the application. E.g.: if a front-end web app is developed using Node.js, but should be served statically (a SPA application, for instance) then this field value should be `html`.
     * @type {string}
     * @memberof Application
     */
    programming_language: string;
    /**
     * The language runtime engine version to be used to execute this application on the deployed servers
     * @type {string}
     * @memberof Application
     */
    engine_version?: string | null;
    /**
     * The base framework on top of which the application has been implemented - it might have impact on the steps to be performed during application deployment
     * @type {string}
     * @memberof Application
     */
    framework: string;
    /**
     * The relative directory where package manager\'s manifest files (`package.json`, `composer.json`, `yarn.lock`, etc) are located. It needs to be set for applications where the actual source code is not located in the top level directory of the repository.
     * @type {string}
     * @memberof Application
     */
    root_directory?: string;
    /**
     * The relative web directory where publicly accessible assets are located and the web content should be served from
     * @type {string}
     * @memberof Application
     */
    public_directory: string;
    /**
     * The entrypoint tells devopness how an application should be started and has basically two forms:  1) `File`: if it\'s a simple file name/path a web app will be served using the entrypoint value as its index file. Example: `index.html`  2) `Command`: if a command line instruction is provided as the entrypoint value, it will be handled as the start up command that initializes the application. It will be assumed that the user is an advanced user that knows what she/he is doing, therefore the command specified here will be run - as is - every time the application needs to be started. 
     * @type {string}
     * @memberof Application
     */
    entrypoint?: string;
    /**
     * Required for CGI|FastCGI|SCGI|WSGI based applications or `docker` containerized applications. It tells `devopness` the private address at which the application listens to external calls. The address has `http` or `https` protocol, an domain name or IP address, optional port and optional path. Or you can specify a UNIX-socket using `unix:` prefix after protocol.
     * @type {string}
     * @memberof Application
     */
    listening_address?: string | null;
    /**
     * The number of deployment history, logs and artifacts to keep stored in both devopness servers and user\'s servers. OR The number of deployment artifacts to be retained in the user\'s servers, making it easier and faster to rollback to previous versions
     * @type {number}
     * @memberof Application
     */
    deployments_keep?: number;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in development mode
     * @type {boolean}
     * @memberof Application
     */
    install_dependencies_dev?: boolean;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in production mode
     * @type {boolean}
     * @memberof Application
     */
    install_dependencies_prod?: boolean;
    /**
     * Indicates if the application requires a daemon to keep it alive
     * @type {boolean}
     * @memberof Application
     */
    requires_daemon?: boolean;
    /**
     * Numeric ID of the project to which the application belongs to
     * @type {number}
     * @memberof Application
     */
    project_id: number;
    /**
     * The list of environments to which the application is linked to
     * @type {Array<EnvironmentRelation>}
     * @memberof Application
     */
    environments: Array<EnvironmentRelation>;
    /**
     * 
     * @type {Array<ServerRelation>}
     * @memberof Application
     */
    servers: Array<ServerRelation>;
    /**
     * 
     * @type {ApplicationLastDeployments}
     * @memberof Application
     */
    last_deployments?: ApplicationLastDeployments;
    /**
     * 
     * @type {SourceProvider}
     * @memberof Application
     */
    source_provider: SourceProvider | null;
    /**
     * 
     * @type {Array<SslCertificateRelation>}
     * @memberof Application
     */
    ssl_certificates: Array<SslCertificateRelation>;
    /**
     * 
     * @type {UserRelation}
     * @memberof Application
     */
    created_by_user: UserRelation;
    /**
     * 
     * @type {ActionRelation}
     * @memberof Application
     */
    last_action?: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Application
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Application
     */
    updated_at?: string;
    /**
     * 
     * @type {ApplicationPipeline}
     * @memberof Application
     */
    default_pipeline?: ApplicationPipeline | null;
}

