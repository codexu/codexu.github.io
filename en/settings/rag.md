# Knowledge Base

![image.png](https://s2.loli.net/2025/07/10/57gNKq8CPa6kZ1V.png)

## Model Configuration

To use the knowledge base, you need to configure an embedding model (required) and a reranking model (optional). For related configurations, please refer to [Model Configuration](/en/settings/model-config).

After configuration, you can enable the knowledge base feature in the conversation box on the notes page:

![image.png](https://s2.loli.net/2025/07/10/DgjJU7rNypiH1kb.png)

> The model availability will be checked during the enabling process.

## Knowledge Base Vector Calculation

The knowledge base feature is implemented based on RAG principles, by converting Markdown files into vectors for storage and search. The entire process is completed through the embedding model.

When using it for the first time, if there are existing Markdown files in the writing page, you can first perform a full calculation (optional):

![image.png](https://s2.loli.net/2025/07/10/TErOmSFLPqo1Xtb.png)

You don't need to perform a full calculation every time you write afterwards. The calculation will be done automatically when your writing is auto-saved.

> This process will consume embedding model resources, so use it judiciously or consider using free models.

## Parameter Settings

If you're not familiar with knowledge base-related concepts, you can ignore this section and use the default values.

When using the knowledge base, it may not always perfectly match the information you need. By adjusting parameters, you can more precisely control the retrieval effectiveness of the knowledge base:

- Chunk Size: The maximum number of characters in a text chunk. Larger chunks may contain more context but increase the complexity of vector calculations.
- Overlap Size: The number of overlapping characters between text chunks. Larger overlap can maintain context continuity.
- Retrieval Count: The number of related documents returned during retrieval. More documents may provide richer information but could also introduce noise.
- Similarity Threshold: The minimum similarity threshold between documents and queries. Only documents exceeding this threshold will be returned. Value range 0.0-1.0, higher values impose stricter requirements.
