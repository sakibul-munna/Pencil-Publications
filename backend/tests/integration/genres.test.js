const request = require("supertest");
var mongoose = require("mongoose");
let server;

const { Genre } = require("../../models/genre");
const { Admin } = require("../../models/admin");

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

  describe("POST /", () => {
    let token;
    let name;

    const execute = async () => {
      return await request(server)
        .post("/api/genres")
        .set("x-auth-token", token)
        .send({ name });
    };

    beforeEach(() => {
      token = new Admin().generateAuthToken();
      name = "genre1";
    });

    it("should return a 401 if the client is not logged in.", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return a 400 if the length of given genre is less than 3 characters", async () => {
      name = "12";

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return a 400 if the length of given genre is greater than 50 characters", async () => {
      name = new Array(52).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should save a given genre if it is valid - HP 1", async () => {
      const res = await execute();

      const genre = await Genre.find({ name: "genre1" });

      expect(genre).not.toBeNull();
      expect(res.statusCode).toBe(200);
    });

    it("should return the given genre after saving, if it is valid - HP 2", async () => {
      const res = await execute();

      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "genre1");
    });
  });

  describe("PUT /", () => {
    let token;
    let newName;
    let genre;
    let objectId;

    const execute = async () => {
      return await request(server)
        .put("/api/genres/" + objectId)
        .set("x-auth-token", token)
        .send({ name: newName });
    };

    beforeEach(async () => {
      genre = new Genre({ name: "genre1" });
      await genre.save();

      token = new Admin().generateAuthToken();
      objectId = genre._id;
      newName = "updatedName";
    });

    it("should return a 401 if the client is not logged in.", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return a 400 if the length of given genre is less than 3 characters", async () => {
      newName = "12";

      const res = await execute();

      expect(res.status).toBe(400);
    });

    it("should return a 400 if the length of given genre is greater than 50 characters", async () => {
      newName = new Array(52).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return 400 error if object id of params is invalid", async () => {
      objectId = "1";
      const res = await execute();
      expect(res.status).toBe(400);
    });

    it("should return 404 error if the genre with the given id was not found", async () => {
      objectId = mongoose.Types.ObjectId();
      const res = await execute();
      expect(res.status).toBe(404);
    });

    it("should update the given genre if it is valid - HP 1", async () => {
      await execute();

      const updatedGenre = await Genre.findById(genre._id);

      expect(updatedGenre.name).toBe(newName);
    });

    it("should return the given genre after saving, if it is valid - HP 2", async () => {
      const res = await execute();
      console.log(res.body);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", newName);
    });
  });

  describe("DELETE /", () => {
    let token;
    let genre;
    let objectId;

    const execute = async () => {
      return await request(server)
        .delete("/api/genres/" + objectId)
        .set("x-auth-token", token)
        .send();
    };

    beforeEach(async () => {
      genre = new Genre({ name: "genre1" });
      await genre.save();

      token = new Admin().generateAuthToken();
      objectId = genre._id;
    });

    it("should return a 401 if the client is not logged in.", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return 400 error if object id of params is invalid", async () => {
      objectId = "1";
      const res = await execute();
      expect(res.status).toBe(400);
    });

    it("should return 404 error if the genre with the given id was not found", async () => {
      objectId = mongoose.Types.ObjectId();
      const res = await execute();
      expect(res.status).toBe(404);
    });

    it("should delete the given genre if it is valid - HP 1", async () => {
      await execute();

      const updatedGenre = await Genre.findById(genre._id);

      expect(updatedGenre).toBeNull();
    });

    it("should return the given genre after deleting, if it is valid - HP 2", async () => {
      const res = await execute();
      console.log(res.body);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", genre.name);
    });
  });
});
