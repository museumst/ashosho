# Ambient Mixer

Railway service that renders selected soothing sounds into one MP3 file.

## API

```http
POST /mix
Content-Type: application/json

{
  "rain": 0.35,
  "waves": 0.51
}
```

The response includes a cached MP3 URL:

```json
{
  "key": "9f56e0f6c090a793aa0e",
  "mix": {
    "rain": 0.35,
    "waves": 0.51
  },
  "durationSeconds": 600,
  "url": "https://example.up.railway.app/mix/9f56e0f6c090a793aa0e.mp3"
}
```

```http
GET /mix.mp3?rain=0.35&waves=0.51
```

This route generates the same mix when needed and returns the MP3 directly. It
allows a browser to call `HTMLAudioElement.play()` during the original user
gesture while an uncached mix is still being generated.

Generated files are stored in Railway's ephemeral `/tmp` filesystem. They can
be regenerated after a service restart.
