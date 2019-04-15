const crypto = require('crypto')

const verifySlackRequest = req => {
  const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET
  const timestamp = req.headers['x-slack-request-timestamp']
  const headerSignature = req.headers['x-slack-signature']
  const basestring = `v0:${timestamp}:${req.body.toString()}`
  const hash = crypto
    .createHmac('sha256', SLACK_SIGNING_SECRET)
    .update(basestring)
    .digest('hex')
  const calculatedSignature = `v0=${hash}`
  return headerSignature === calculatedSignature
}

module.exports = verifySlackRequest
