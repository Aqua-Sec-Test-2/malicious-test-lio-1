// Test file for secret detection

const config = {
  // This should trigger slack-api-token rule
  slack_webhook: "xoxb-123456789012-123456789012-abcdefghijABCDEFGHIJ123456789012",
  
  // Generic password pattern
  api_key: "sk_live_abcdefghijklmnopqrstuvwxyz123456",
  
  // AWS pattern
  aws_secret: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY"
};

module.exports = config;
