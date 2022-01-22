const request = require("supertest");
var mongoose = require("mongoose");
let server;

const { Author } = require("../../models/author");
const { Admin } = require("../../models/admin");

describe("/api/authors", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await server.close();
    await Author.deleteMany({});
  });

  describe("GET /", () => {
    it("should return all authors", async () => {
      await Author.collection.insertMany([
        { name: "author1" },
        { name: "author2" },
      ]);
      const res = await request(server).get("/api/authors");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((x) => x.name === "author1")).toBeTruthy();
      expect(res.body.some((x) => x.name === "author2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should return a author if a valid id is provided", async () => {
      const author = new Author({ name: "author1" });
      await author.save();

      const res = await request(server).get("/api/authors/" + author._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", author.name);
    });

    it("should return 400 if invalid object id is provided", async () => {
      const res = await request(server).get("/api/authors/" + 1);

      expect(res.status).toBe(400);
    });

    it("should return 404 if valid id is provided but there is no data with this id", async () => {
      const objId = mongoose.Types.ObjectId();
      const res = await request(server).get("/api/authors/" + objId);

      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    let token;
    let name;

    const execute = async () => {
      return await request(server)
        .post("/api/authors")
        .set("x-auth-token", token)
        .send({ name });
    };

    beforeEach(() => {
      token = new Admin().generateAuthToken();
      name = "author1";
    });

    it("should return a 401 if the client is not logged in.", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return a 400 if the length of given author is less than 5 characters", async () => {
      name = "1234";

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return a 400 if the length of given author is greater than 255 characters", async () => {
      name = new Array(257).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should save a given author if it is valid - HP 1", async () => {
      const res = await execute();

      const author = await Author.find({ name: "author1" });

      expect(author).not.toBeNull();
      expect(res.statusCode).toBe(200);
    });

    it("should return the given author after saving, if it is valid - HP 2", async () => {
      const res = await execute();

      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "author1");
    });
  });

  describe("PUT /", () => {
    let token;
    let newName;
    let author;
    let objectId;

    const execute = async () => {
      return await request(server)
        .put("/api/authors/" + objectId)
        .set("x-auth-token", token)
        .send({ name: newName });
    };

    beforeEach(async () => {
      author = new Author({ name: "author1" });
      await author.save();

      token = new Admin().generateAuthToken();
      objectId = author._id;
      newName = "updatedName";
    });

    it("should return a 401 if the client is not logged in.", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return a 400 if the length of given author is less than 5 characters", async () => {
      newName = "1234";

      const res = await execute();

      expect(res.status).toBe(400);
    });

    it("should return a 400 if the length of given author is greater than 255 characters", async () => {
      newName = new Array(257).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return 400 error if object id of params is invalid", async () => {
      objectId = "1";
      const res = await execute();
      expect(res.status).toBe(400);
    });

    it("should return 404 error if the author with the given id was not found", async () => {
      objectId = mongoose.Types.ObjectId();
      const res = await execute();
      expect(res.status).toBe(404);
    });

    it("should update the given author if it is valid - HP 1", async () => {
      await execute();

      const updatedAuthor = await Author.findById(author._id);

      expect(updatedAuthor.name).toBe(newName);
    });

    it("should return the given author after saving, if it is valid - HP 2", async () => {
      const res = await execute();
      console.log(res.body);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", newName);
    });
  });

  describe("DELETE /", () => {
    let token;
    let author;
    let objectId;

    const execute = async () => {
      return await request(server)
        .delete("/api/authors/" + objectId)
        .set("x-auth-token", token)
        .send();
    };

    beforeEach(async () => {
      author = new Author({ name: "author1" });
      await author.save();

      token = new Admin().generateAuthToken();
      objectId = author._id;
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

    it("should return 404 error if the author with the given id was not found", async () => {
      objectId = mongoose.Types.ObjectId();
      const res = await execute();
      expect(res.status).toBe(404);
    });

    it("should delete the given author if it is valid - HP 1", async () => {
      await execute();

      const updatedAuthor = await Author.findById(author._id);

      expect(updatedAuthor).toBeNull();
    });

    it("should return the given author after deleting, if it is valid - HP 2", async () => {
      const res = await execute();
      console.log(res.body);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", author.name);
    });
  });
});
