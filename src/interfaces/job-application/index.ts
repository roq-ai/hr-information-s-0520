import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  job_title: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  user_id?: string;
}
