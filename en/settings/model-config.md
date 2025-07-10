# Model Configuration

NoteGen integrates mainstream AI model services and supports custom configurations to meet different needs.

![image.png](https://s2.loli.net/2025/07/10/twNG14nsJZvPW6r.png)

## Creating Model Configuration

Click the `Create New Configuration` button to view templates for custom and mainstream model providers:

![image.png](https://s2.loli.net/2025/07/10/2J9jTLGeSO5HPhw.png)

Note that each configuration corresponds to one model. For the same provider, you can click the copy button to quickly create a new configuration.

## Configuration

### Custom Name

Used to distinguish different model configurations. You can fill in anything, and it can be repeated.

### BaseURL

Note that you only need to configure up to the **version number**, e.g., https://api.openai.com/v1. The suffix will be added automatically. The same applies to other providers as well. Please do not include `chat/completions`, `/embeddings`, etc. in your input.

### API Key

Enter your corresponding key here. For Ollama, LM Studio, etc., you can fill in anything.

### Model

Generally, once the BaseURL and API Key are configured correctly, available models will be automatically retrieved and presented in a dropdown list. If they cannot be retrieved, you can enter them manually.

### Model Type

Select the model type to distinguish different models. Choosing the wrong model type may cause it to not function properly.

Currently supported: Chat, ~~Image Generation~~, ~~Video~~, ~~Voice~~, Embedding, Reranking.

- Chat: The most commonly used model type for conversation, writing, and other scenarios.
- Embedding and Reranking models: Suitable for scenarios using knowledge bases.
- Other model types will be gradually supported in future versions.

### Advanced Configuration

If you don't understand these configurations, you can ignore them and use the default values.

#### Temperature

The sampling temperature to use, between 0 and 2. Higher values (like 0.8) will make the output more random, while lower values (like 0.2) will make it more focused and deterministic. We generally recommend altering this or top_p but not both.

#### Top P

An alternative to temperature sampling called nucleus sampling, where the model considers the results of tokens with top_p probability mass. So 0.1 means only considering tokens comprising the top 10% probability mass. We generally recommend altering this or temperature but not both.
