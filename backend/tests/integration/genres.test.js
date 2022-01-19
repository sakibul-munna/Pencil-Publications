const request = require("supertest");
var mongoose = require("mongoose");
let server;

const { Genre } = require("../../models/genre");

describe("/api/genres", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    server.close();
    await Genre.deleteMany({});
  });

  describe("GET /", () => {
    it("should return all genres", async () => {
      await Genre.collection.insertMany([
        { name: "genre1" },
        { name: "genre2" },
      ]);
      const res = await request(server).get("/api/genres");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((x) => x.name === "genre1")).toBeTruthy();
      expect(res.body.some((x) => x.name === "genre2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should return a genre if a valid id is provided", async () => {
      const genre = new Genre({ name: "Genre1" });
      await genre.save();

      const res = await request(server).get("/api/genres/" + genre._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", genre.name);
    });

    it("should return 400 if invalid object id is provided", async () => {
      const res = await request(server).get("/api/genres/" + 1);

      expect(res.status).toBe(400);
    });

    it("should return 404 if valid id is provided but there is no data with this id", async () => {
      const objId = mongoose.Types.ObjectId();
      const res = await request(server).get("/api/genres/" + objId);

      expect(res.status).toBe(404);
    });
  });
});
