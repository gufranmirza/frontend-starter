/**
 * Project Configuration.
 *
 * NOTE: All file/folder paths should be relative to the project root. The
 * absolute paths should be resolved during runtime by our build internal/server.
 */

const values = {
  ServiceURI: 'http://localhost:8001/recruiter-api/v1',
  Social: {
    Mobile: '+91-96637-99660',
    Email: 'yourfriends@jobbox.ai',
  },
  Product: {
    Name: 'jobbox.ai ',
  },
  URLs: {
    RecruiterPortal: 'https://enterprise.jobbox.ai',
    ApplicationPortal: 'https://app.jobbox.ai',
    MainPortal: 'https://jobbox.ai',
  },
};

exports.default = values;
