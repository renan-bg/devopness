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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { CronJob } from '../../generated/models';
import { CronJobCreate } from '../../generated/models';
import { CronJobRelation } from '../../generated/models';

/**
 * ProjectsCronJobsApiService - Auto-generated
 */
export class ProjectsCronJobsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a Cron Job to the given project
     * @param {number} projectId The ID of the project.
     * @param {CronJobCreate} cronJobCreate A JSON object containing the resource data
     */
    public async addProjectCronJob(projectId: number, cronJobCreate: CronJobCreate): Promise<ApiResponse<CronJob>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addProjectCronJob');
        }
        if (cronJobCreate === null || cronJobCreate === undefined) {
            throw new ArgumentNullException('cronJobCreate', 'addProjectCronJob');
        }
        
        let queryString = '';

        const requestUrl = '/projects/{project_id}/cron-jobs' + (queryString? `?${queryString}` : '');

        const response = await this.post <CronJob, CronJobCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), cronJobCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all Cron Jobs belonging to a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectCronJobs(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<CronJobRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectCronJobs');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/cron-jobs' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CronJobRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
