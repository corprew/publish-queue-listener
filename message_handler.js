async function handleMessage(message) {
    const props = JSON.parse(message.Body);
    console.log('properties', props);

    copy_object_result = await s3.copyObject({
        CopySource: srcBucket + '/' + sourceObject,
        Bucket: destBucket,
        Key: sourceObject
    }).promise();

}

module.exports.handleMessage = handleMessage;
