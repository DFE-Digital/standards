module.exports = {

  // Base URL
  baseURL: process.env.BASE_URL || 'https://standards.education.gov.uk/',

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Port to run local development server on
  port: process.env.PORT || 3542,
  githubrepo: 'https://github.com/DFE-Digital/standards',
  
  assetPath: process.env.assetPath,

  serviceName: 'Standards manual'
};


