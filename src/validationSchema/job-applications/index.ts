import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  user_id: yup.string().nullable(),
});
