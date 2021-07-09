import { Config as ConfigType } from '@/core/types/index.d';

function Config(): ConfigType {
  return {
    ServiceURI: 'http://localhost:8001/recruiter-api/v1',
  };
}

export { Config };
