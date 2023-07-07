import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  feedback: yup.string().required(),
  user_id: yup.string().nullable(),
});
