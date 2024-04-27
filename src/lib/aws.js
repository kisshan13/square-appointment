import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { Body } from "@radix-ui/themes/dist/cjs/components/table";
import { Stream } from "stream";

const s3Client = new S3Client({
    region: "ap-southeast-2",
    credentials: {
        accessKeyId: process.env.AWS_CLIENT_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
})

async function uploadFile(stream, name) {

    const streamUpload = new Stream.PassThrough();

    const uploader = new Upload({
        client: s3Client,
        params: {
            Bucket: process.env.AWS_BUCKET,
            Key: name,
            Body: stream
        },
        queueSize: 5
    });

    stream.pipe(streamUpload);

    const upload = await uploader.done();

    return upload;
}

export default uploadFile;