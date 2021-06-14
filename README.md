# museum-rest-api-v3

A RESTful museum web service

## Run

// Start the dev server: deno run --allow-net --import-map=import_map.json
--lock lock.json --cached-only src/app.ts

// Update lock file after adding a dependency: deno cache
--import-map=import_map.json --lock=lock.json --lock-write src/app.ts

// Install dependencies after cloning: deno cache --import-map=import_map.json
--lock lock.json --reload src/app.ts

// Test CORS: deno run --allow-net --allow-read
https://deno.land/std/http/file_server.ts -p 3000 --host localhost
