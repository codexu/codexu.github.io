# AI Configuration

NoteGen integrates mainstream AI model services and supports custom configurations to meet different needs.

![1.png](https://s2.loli.net/2025/05/26/S9C58QMryevcbJA.png)

## Configuration

### Model Provider

Here you can choose the model provider. If your service provider is not listed, please click the add button to customize and add a configuration.

Click copy to duplicate the same configuration, useful for using different models from the same service provider.

::: tip
For locally deployed models like Ollama, LM Studio, etc., if they don't work properly after configuration, please check if cross-domain access is enabled.
:::

### BaseURL

Note that you only need to configure up to the version number, e.g., https://api.openai.com/v1. The suffix will be added automatically. The same applies to other providers as well. Please do not include `chat/completions` in your input.

### API Key

Enter your corresponding key here. For Ollama, LM Studio, etc., you can fill in anything.

### Model

Generally, once the BaseURL and API Key are configured correctly, available models will be automatically retrieved and presented in a dropdown list. If they cannot be retrieved, you can enter them manually.

### Temperature

The sampling temperature to use, between 0 and 2. Higher values (like 0.8) will make the output more random, while lower values (like 0.2) will make it more focused and deterministic. We generally recommend altering this or top_p but not both.

### Top P

An alternative to temperature sampling called nucleus sampling, where the model considers the results of tokens with top_p probability mass. So 0.1 means only considering tokens comprising the top 10% probability mass. We generally recommend altering this or temperature but not both.
