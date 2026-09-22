import { test, after } from "node:test";
import assert from "node:assert";
import app from "./app.js";

test("GET / returns success message", async () => {
  const server = app.listen(0);
  const { port } = server.address();

  after(() => server.close());

  const response = await fetch(`http://localhost:${port}/`);
  const body = await response.text();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(body, "express server running");
});
