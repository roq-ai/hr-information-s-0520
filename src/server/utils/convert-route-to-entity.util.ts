const mapping: Record<string, string> = {
  'job-applications': 'job_application',
  payrolls: 'payroll',
  'performance-evaluations': 'performance_evaluation',
  people: 'person',
  'time-trackings': 'time_tracking',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
