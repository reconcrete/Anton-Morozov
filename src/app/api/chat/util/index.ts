import { JSONValue, experimental_StreamData } from "ai";

export class StreamMetadata<T extends JSONValue> extends experimental_StreamData {
  constructor() {
    super();
  }

  appendValue(data: T | undefined) {
    super.append(data ?? {});
  }

  close(): Promise<void> {
    return super.close();
  }
}
