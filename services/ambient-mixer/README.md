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

Generated files are stored in Railway's ephemeral `/tmp` filesystem. They can
be regenerated after a service restart.
