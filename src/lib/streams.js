import { Readable } from "stream"

function createReadStreamFromBuffer(buffer) {
    // Create a custom readable stream
    const readableStream = new Readable({
        read() {
            // Push the buffer data into the stream
            this.push(buffer);
            // Signal the end of the stream
            this.push(null);
        }
    });

    return readableStream;
}

export default createReadStreamFromBuffer;